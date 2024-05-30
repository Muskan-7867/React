import React, { useEffect  } from 'react'
import {  createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../../utills/userSlice';
import { auth } from '../../utills/firebaseConfig';


export const Body = () => {
  const dispatch = useDispatch();
 
 const appRouter = createBrowserRouter([
{
   path:'/',
   element:<Login />
},
{
  path:'/browse',
  element:<Browse />
}
]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const {uid,email,photoURL,displayName} = user;
      dispatch(addUser({uid, email, photoURL:photoURL,displayName}))
      
      // ...
    } else {
      // User is signed out
      dispatch(removeuser());
      
    }
  });
  
})


  return (
  <div>
 <RouterProvider router={appRouter} />

      </div>
 
  )
}

export default Body;