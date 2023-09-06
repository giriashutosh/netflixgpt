import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/UserSlice'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<Login/>
    },{
        path: '/browse',
        element: <Browse/>
    }
])

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName, email, uid } = user;
        console.log(user)
        dispatch(addUser({uid, email, displayName}))
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
       <RouterProvider router={appRouter}/>
       
    </div>
  )
}

export default Body