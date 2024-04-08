import React from 'react';
import Header from './Header';

export const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute w-full'>
        <img className='h-screen w-full object-cover ' src='src/assets/netflix.jpg' alt="Netflix" />
      </div>

      <form className='absolute bg-black right-0 left-0 top-1/2 transform -translate-y-1/2 mx-auto p-12 w-3/12'>
        <h1 className='text-white text-3xl font-bold mb-6'>Sign-In</h1>
        <input type='text' placeholder='Email-Address' className='py-4 px-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'></input>
        <input type='password' placeholder='Password' className='py-4 px-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'></input>
        <button className='py-2 px-4 bg-red-700 text-white w-full rounded hover:bg-red-600'>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
