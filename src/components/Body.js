import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../store/UserSlice'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }, {
    path: '/browse',
    element: <Browse />
  }
])

const Body = () => {
  const dispatch = useDispatch();
  //const user  = useSelector(store => store.user)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        console.log(user)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL}))
        //const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      }
    });

  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />

    </div>
  )
}

export default Body