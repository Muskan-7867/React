import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  return (
    
    <nav className="flex justify-between items-center border-none py-3 lg:border px-2 fixed top-0 left-0  right-0 bg-[#f5f5f5ff] z-20">
      <div className="flex  flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
        <div className="flex justify-between items-center gap-2 mr-4">
          <img src="/jio.png" width={37} alt="Jio Logo" />
          <Link to="/" className="font-bold  no-underline  text-black text-lg">
            Jiosavan
          </Link>
        </div>
        <div className="flex text-[24px] lg:text-[15px] gap-5 font-semibold h-full text-gray-600">
          <li className="list-none">Music</li>
          <li className="list-none">Podcast</li>
          <li className="list-none">Go Pro</li>
        </div>
      </div>

      <div className="hidden lg:block">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for things"
          className="py-2 rounded-full w-[40vw] outline-none text-center border text-black"
        />
      </div>

      <div className="hidden lg:flex justify-between items-center gap-4">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-gray-600 text-[14px] font-semibold">
              Music Languages
            </span>
            <span className="text-[12px] text-gray-500">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-gray-500 text-xl mt-2" />
        </div>
        <div className="flex gap-5 text-[15px] text-gray-600 font-semibold">
          <li className="list-none">Log in</li>
          <li className="list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};
