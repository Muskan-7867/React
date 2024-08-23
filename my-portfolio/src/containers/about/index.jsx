import React from "react";
import Pageheader from "../../components/pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import RotatingCircle from "./circle";
import ErrorBoundary from "/src/containers/about/Errorboundary"

const About = () => {
  return (
    <ErrorBoundary>
      <section className="p-8 md:p-12 lg:p-16 mb-2"> {/* Decreased margin-bottom */}
        <Pageheader headertext="About Me" icon={<BsInfoCircleFill size={30} />} />
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-16 text-white">
        {/* Left Content */}
        <div className="col-span-2 space-y-4 md:space-y-5 lg:space-y-8">
          
          <h3 className="text-[#A52A2A] font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Front End Developer
          </h3>
          <p className="text-left text-sm md:text-base lg:text-lg xl:text-xl pb-1 border-b-2 border-[#A52A2A]-500 text-[#A52A2A]">
            Experienced front-end developer with a keen eye for design and a strong foundation in creating responsive, visually appealing websites. Proficient in HTML, CSS, JavaScript, and frameworks like React, I specialize in transforming complex designs into functional, interactive user interfaces. Committed to optimizing user experience and ensuring cross-browser compatibility, I combine technical expertise with a passion for innovation to deliver high-quality web solutions.
          </p>
          <div className="mt-4">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#A52A2A] mb-3">Personal Information</h2>
            <ul className="space-y-2 text-[#A52A2A] text-sm md:text-base">
              <li>
                <span className="font-bold">Name:</span>
                <span className="ml-2">John Doe</span>
              </li>
              <li>
                <span className="font-bold">Age:</span>
                <span className="ml-2">30</span>
              </li>
              <li>
                <span className="font-bold">Location:</span>
                <span className="ml-2">New York, USA</span>
              </li>
              <li>
                <span className="font-bold">Email:</span>
                <span className="ml-2">john.doe@example.com</span>
              </li>
              <li>
                <span className="font-bold">Phone:</span>
                <span className="ml-2">+1 234 567 890</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right Icons */}
        <div className="flex justify-center items-center">
          <RotatingCircle size={180} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default About;
