import React from 'react';


import Weather  from './component/Weather'
import Card from './component/Card';
import { Localstorage } from './component/Localstorage';
function App() {
  return (
    <>
    {/* <h1>React router dom</h1> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about page</h1>} />
        </Routes>
      </BrowserRouter> */}
      <Localstorage />
      
    </>
  );
}

export default App;
