import React from "react";
import Pageheader from "../../components/pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <section className="p-8 ">
        <Pageheader
          headertext="My Resume"
          icon={<BsInfoCircleFill size={30} />}
        />
      </section>

      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-2xl text-orange-700 font-semibold mb-4">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="#4a5568">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021-2025"
              iconStyle={{  color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech)</h3>
              <h4 className="text-lg">Electronics and Communication Engineering (ECE)</h4>
              <p className="text-gray-700">DAV institute of Engineering and Technology</p>
              <p className="text-gray-500">Jalandhar, India</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div>
          <h3 className="text-2xl text-orange-700 font-semibold mb-4">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="#4a5568">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2024 - July 2024"
              iconStyle={{  color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="text-xl  font-bold">Intern</h3>
              <h4 className="text-lg">Prodigy Infotech</h4>
              <p className="text-gray-700">City, Country</p>
              <p className="text-gray-500">Worked on various projects and gained hands-on experience in Web  development.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Resume;
