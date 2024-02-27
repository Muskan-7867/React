// Navbar.js
import React from 'react';
import { Link ,NavLink} from 'react-router-dom';

function Navbar() {
  return (
  <nav className='navbar'>
      {/* <NavLink  style={({isActive})=>{return{backgroundColor: isActive ? 'red' :'blue'}}}to="/home">Home</NavLink>
      <br />
      <Link to="/about">About</Link>
      <br/>
      <Link to="/Param/anil">anil</Link>
      <br/>
      <Link to="/Param/peter">peter</Link>
      <br/> */}
      <Link to="/searchparam">Search param</Link>
      </nav>
  
  );
}

export default Navbar;
