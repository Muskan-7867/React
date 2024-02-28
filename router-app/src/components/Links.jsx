import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Page404 from './Page404';
import { Param } from './Param';
import { Searchparam } from './Searchparam';
import { Login } from './Login';
import { Protected } from './Protected';

function Links() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Protected routes */}
          <Route path="/home" element={<Protected Component={Home} />} />
          {/* Unprotected routes */}
          <Route path="/about" element={<About />} />
          {/* Any other unmatched route will render Login if not logged in */}
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Links;
