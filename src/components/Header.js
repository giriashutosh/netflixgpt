import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../store/UserSlice';
import { AVATAR_URL, LOGO_URL } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate("/")
      
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        console.log(user)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL})) 
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => {
      unsubscribe();
   }
  }, [])

  return (

    <div className='w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div>
        <img
          className='w-40'
          src={LOGO_URL}
          alt=''
        />
      </div>
      {user && <div className='flex items-center gap-4'>
        <p className='text-red-600 font-bold text-lg'>Welcome, {user.displayName}</p>
        <img src={ AVATAR_URL} className = "w-10" alt=''/>
        <button className='text-red-600 font-bold text-lg mr-6' onClick={signOutHandler}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;