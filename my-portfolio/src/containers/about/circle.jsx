import React from "react";
import { FaJs, FaHtml5, FaDatabase, FaDev } from "react-icons/fa";

const RotatingCircle = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute right-80 bottom-40 top-1/2 transform -translate-y-1/2 pr-8 hidden lg:block">
        <div className="relative w-80 h-80 rounded-full border-4 border-[#A52A2A]  text-[#A52A2A]  animate-spin-slow">
          {/* Top Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaJs size={50} className="text-[#A52A2A]  clip-circle" />
          </div>
          {/* Bottom Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <FaHtml5 size={50} className="text-[#A52A2A]  clip-circle" />
          </div>
          {/* Left Icon */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <FaDatabase size={50} className="text-[#A52A2A]  clip-circle" />
          </div>
          {/* Right Icon */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
            <FaDev size={50} className="text-[#A52A2A] clip-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
