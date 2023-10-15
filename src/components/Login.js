import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'

import { useDispatch } from 'react-redux'
import { addUser } from '../store/UserSlice'
import { BG_URL } from '../utils/constant'
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errMssg, setErrorMssg] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
   
    const dispatch = useDispatch()

    const validationHandler = () => {
        //console.log(email);
        const mssg = checkValidation(email.current.value, password.current.value);
        setErrorMssg(mssg)
        if (mssg) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        setErrorMssg(error)
                        // ...
                      });
                   

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage)
                    setErrorMssg(errorMessage)
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage)
                    setErrorMssg(errorMessage)
                });
        }

    }
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div className=''>
            <Header />
            <div className='absolute '>
                <img
                    className='bg-contain bg-center bg-no-repeat'
                    src={BG_URL}
                    alt=''
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-4/12 p-12 absolute bg-black my-36 mx-auto left-0 right-0 opacity-80 rounded-lg' noValidate>
                <h1 className='m-4 text-white font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn &&
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='w-full p-2 m-4 bg-slate-950 text-white'

                    />
                }
                <input
                    ref={email}
                    type="email"
                    formNoValidate
                    placeholder='Enter your email or Phone Number'
                    className='w-full p-2 m-4 bg-slate-950 text-white'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Enter your password'
                    className='w-full p-2 m-4 bg-slate-950 text-white'
                />
                <button className='w-full p-2 m-4 text-white bg-red-700 rounded-lg' onClick={validationHandler}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='py-2 m-4 text-red-600 font-bold text-lg'>{errMssg}</p>
                <p className='text-white m-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign up now." : "Already a User? Sign In now."}</p>
            </form>
        </div>

    )
}

export default Login