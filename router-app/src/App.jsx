import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>React router dom</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
