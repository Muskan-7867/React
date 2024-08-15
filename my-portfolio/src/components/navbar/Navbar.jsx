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
    <div className="navbar bg-gray-700 flex items-center justify-between h-[80px] px-5">
      <Link to="/" className="text-white flex items-center logo">
        <FaReact size={30} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-end">
        <ul className="flex list-none gap-10 text-white links">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/skills" className="nav-link">SKILLS</Link></li>
          <li><Link to="/resume" className="nav-link">RESUME</Link></li>
          <li><Link to="/projects" className="nav-link">PROJECTS</Link></li> {/* Corrected route */}
          <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <div className="cursor-pointer text-white" onClick={toggleMenu}>
          {isOpen ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] right-0 bg-gray-700 w-full text-center">
          <ul className="list-none p-6 mobile-links">
            <li><Link to="/" className="block py-2 text-white nav-link" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/about" className="block py-2 text-white nav-link" onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/skills" className="block py-2 text-white nav-link" onClick={toggleMenu}>SKILLS</Link></li>
            <li><Link to="/resume" className="block py-2 text-white nav-link" onClick={toggleMenu}>RESUME</Link></li>
            <li><Link to="/projects" className="block py-2 text-white nav-link" onClick={toggleMenu}>PROJECTS</Link></li> {/* Corrected route */}
            <li><Link to="/contact" className="block py-2 text-white nav-link" onClick={toggleMenu}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
