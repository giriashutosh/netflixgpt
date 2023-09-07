import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate("/")
      
    }).catch((error) => {
      console.log(error)
    });
  }
  return (

    <div className='w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div>
        <img
          className='w-40'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt=''
        />
      </div>
      {user && <div className='flex items-center gap-4'>
        <p className='text-red-600 font-bold text-lg'>Welcome, {user.displayName}</p>
        <img src= "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" className = "w-10" alt=''/>
        <button className='text-red-600 font-bold text-lg mr-6' onClick={signOutHandler}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header