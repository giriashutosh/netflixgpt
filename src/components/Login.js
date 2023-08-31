import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    
    const toggleSignIn = () =>{
        setIsSignIn(!isSignIn)
    }

    return (
        <div className=''>
            <Header />
            <div className='absolute '>
                <img
                    className=''
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=''
                />
            </div>
            <form className='w-4/12 p-12 absolute bg-black my-36 mx-auto left-0 right-0 opacity-80 rounded-lg'>
                <h1 className='m-4 text-white font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn &&
                 <input
                 type="text"
                 placeholder='Full Name'
                 className='w-full p-2 m-4 bg-slate-950 '
                 
                 />
                }
                <input
                type="email"
                placeholder='Enter your email or Phone Number'
                className='w-full p-2 m-4 bg-slate-950'
                />
                <input
                type='password'
                placeholder='Enter your password'
                className='w-full p-2 m-4 bg-slate-950'
                />
                <button className='w-full p-2 m-4 text-white bg-red-700 rounded-lg'>{isSignIn ? "Sign In": "Sign Up"}</button>
                <p className='text-white m-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign up now.":"Already a User? Sign In now."}</p>
            </form>
        </div>

    )
}

export default Login