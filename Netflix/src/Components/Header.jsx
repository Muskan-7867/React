import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../../utills/firebaseConfig';
export const Header = () => {
  const navigate = useNavigate();
  const handleSignOut= () => {
    signOut(auth)
    .then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
    
  }
  return (
    <>
   <div className='absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10'>
    <img  className='w-44 h-32'src='src/assets/netflixlogo.png' alt="Netflix Logo" />
   

   <div className='flex p-8 ' >
    <img  className='h-14 w-14 ' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' />
    <button  onClick={handleSignOut} className='bg-red-600  ml-4 p-4 font-bold text-white rounded-lg '>Sign Out</button>
   </div>
   </div>

   </>
   
  );
};

export default Header;
