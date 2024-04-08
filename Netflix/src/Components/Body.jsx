import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';


export const Body = () => {
  return (
  <div>
 <BrowserRouter>
       
        <Routes>
          
          <Route path="/" element={<Login />} />
         
          <Route path="/Browse" element={<Browse />} />
        
          
        </Routes>
      </BrowserRouter>
  </div>
  )
}
export default Body