import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Page404 from './Page404';
import { Param } from './Param';

function Links() {
    return (
      <>
      <h1>react link</h1>
    <BrowserRouter>
    <Navbar />
          <Routes>
           
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/Param/:name' element={<Param />} />
            
          </Routes>
        </BrowserRouter>
      
      </>
    );
  }
  
  export default Links;
  
