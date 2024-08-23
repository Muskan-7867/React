import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-[#A52A2A] flex items-center justify-between h-[80px] px-5">
      <Link to="/" className="flex items-center text-[#FFDFC4] logo">
        <FaReact size={30} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-end">
        <ul className="flex list-none gap-10 links">
          <li><Link to="/" className="nav-link text-[#FFDFC4]">HOME</Link></li>
          <li><Link to="/about" className="nav-link text-[#FFDFC4]">ABOUT</Link></li>
          <li><Link to="/skills" className="nav-link text-[#FFDFC4]">SKILLS</Link></li>
          <li><Link to="/resume" className="nav-link text-[#FFDFC4]">RESUME</Link></li>
          <li><Link to="/projects" className="nav-link text-[#FFDFC4]">PROJECTS</Link></li> 
          <li><Link to="/contact" className="nav-link text-[#FFDFC4]">CONTACT</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <div className="cursor-pointer " onClick={toggleMenu}>
          {isOpen ? <HiX size={30} color="#FFDFC4" /> : <FaBars size={30} color="#FFDFC4" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] right-0 bg-[#A52A2A] w-full text-center bg-opacity-50 ">
          <ul className="list-none p-6 mobile-links ">
            <li><Link to="/" className="block py-2 nav-link" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/about" className="block py-2 nav-link" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/skills" className="block py-2 nav-link" onClick={toggleMenu}>SKILLS</Link></li>
            <li><Link to="/resume" className="block py-2 nav-link" onClick={toggleMenu}>RESUME</Link></li>
            <li><Link to="/projects" className="block py-2 nav-link" onClick={toggleMenu}>PROJECTS</Link></li> 
            <li><Link to="/contact" className="block py-2 nav-link" onClick={toggleMenu}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
