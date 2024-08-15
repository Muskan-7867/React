import React from "react";
import Pageheader from "../../components/pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import RotatingCircle from "./circle";
import ErrorBoundary from "./Errorboundary";

const About = () => {
  return (
    <ErrorBoundary>
      <section className="p-8 md:p-12 lg:p-16">
        <Pageheader headertext="About Me" icon={<BsInfoCircleFill size={30} />} />
      </section>
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8 lg:px-16 text-white space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 md:space-y-6 lg:space-y-8 w-full md:w-3/4 lg:w-2/3">
          <h3 className="text-orange-500 font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-slide-in-left">
            Front End Developer
          </h3>
          <p className="text-left text-sm md:text-base lg:text-lg xl:text-xl w-full md:w-4/5 lg:w-3/4 pb-2 mb-8 border-b-2 border-orange-500 animate-slide-in-left delay-200">
            Experienced front-end developer with a keen eye for design and a strong foundation in creating responsive, visually appealing websites. Proficient in HTML, CSS, JavaScript, and frameworks like React, I specialize in transforming complex designs into functional, interactive user interfaces. Committed to optimizing user experience and ensuring cross-browser compatibility, I combine technical expertise with a passion for innovation to deliver high-quality web solutions.
          </p>
          <div className="animate-slideInRight mt-5">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  font-semibold text-orange-500 mb-4">Personal Information</h2>
            <ul className="space-y-2 text-white text-sm md:text-base">
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
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <RotatingCircle size={180} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default About;
