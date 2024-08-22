import React from "react";
import Pageheader from "../../components/pageheader";
import { BsFileTextFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <section className="p-8">
        <Pageheader headertext="My Resume" icon={<BsFileTextFill size={30} />} />
      </section>

      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-2xl text-[#A52A2A] font-semibold mb-4">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="#4a5568">
            <VerticalTimelineElement
              className="vertical-timeline-element--education text-white"
              date="2021-2025"
              iconStyle={{ color: "#A52A2A", border: "2px solid #A52A2A" }} 
              icon={<FaGraduationCap />}
              contentStyle={{ background: "transparent", border: "2px solid #A52A2A" }} 
              contentArrowStyle={{ borderRight: "7px solid #A52A2A" }}>
              <h3 className="text-xl font-bold text-[#A52A2A]">Bachelor of Technology (B.Tech)</h3>
              <h4 className="text-lg text-[#A52A2A]">Electronics and Communication Engineering (ECE)</h4>
              <p className="text-[#A52A2A]">DAV Institute of Engineering and Technology</p>
              <p className="text-[#A52A2A]">Jalandhar, India</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div>
          <h3 className="text-2xl text-[#A52A2A] font-semibold mb-4">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="#4a5568">
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-[#A52A2A]"
              date="June 2024 - July 2024"
              iconStyle={{ color: "#A52A2A", border: "2px solid #A52A2A" }} 
              icon={<FaBriefcase />}
              contentStyle={{ background: "transparent", border: "2px solid #A52A2A " }} 
              contentArrowStyle={{ borderRight: "7px solid #A52A2A" }} 
            >
              <h3 className="text-xl font-bold ">One Month Intern</h3>
              <h4 className="text-lg text-[#A52A2A]">Prodigy Infotech</h4>
              <p className="text-[#A52A2A]">City, Country</p>
              <p className="text-[#A52A2A]">Worked on various projects and gained hands-on experience in Web development.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Resume;
