import React, { useState } from 'react';
import Header from './Header';

export const Login = () => {
  const[isSigninform, setisSigninform] = useState(true);

  const togglesignform = () => {
setisSigninform(!isSigninform);
  }
  return (
    <div>
      <Header />
      <div className='absolute w-full'>
        <img className='h-screen w-full object-cover ' src='src/assets/netflix.jpg' alt="Netflix" />
      </div>

      <form className='absolute right-0 left-0 top-1/2 bg-black bg-opacity-80  rounded-lg transform -translate-y-1/2 mx-auto p-12 w-3/12'>
        <h1 className='text-white text-3xl font-bold mb-6'>
          { isSigninform ? "Sign-In" : "Sign-Up" }
        </h1>
        {!isSigninform && (<input type='text' placeholder='Full-Name' 
        className='py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'></input>)}

        <input type='text' placeholder='Email-Address' className='py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'></input>
        <input type='password' placeholder='Password' className='py-4 px-4 mt-6 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'></input>
        <button className='py-2 px-4 bg-red-700 mt-6 text-white w-full rounded hover:bg-red-600'>
        { isSigninform ? "Sign-In" : "Sign-Up" }
        </button>
        <p onClick={togglesignform} className='text-white mt-5'>
          {isSigninform ? "New to Netflix? Sign Up Now" : "Already account? Sign in Now" }</p> 
      </form>
    </div>
  );
};

export default Login;
