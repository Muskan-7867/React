import React from 'react';
import { FaStar } from 'react-icons/fa';
import Pageheader from '../../components/pageheader';
import { skillsdata } from './utills';
import { Line } from 'rc-progress';

const Skills = () => {
  return (
    <>
      <section className="p-8 text-[#A52A2A]">
        <Pageheader headertext="My Skills" icon={<FaStar size={30} />} />
      </section>

      {/* Skill Categories with Labels and Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 bg-transparent">
        {skillsdata.map((item, i) => (
          <div key={i} className="p-4">
            {/* Skill Category Label */}
            <h3 className="text-2xl font-bold text-start text-[#A52A2A] transition-transform duration-500 ease-in-out animate-slide-in-left mb-4">
              {item.label}
            </h3>

            {/* Skills and Progress Bars */}
            <div className="flex flex-col gap-12">
              {item.data.map((skill, j) => (
                <div
                  key={j}
                  className="transition-transform duration-500 ease-in-out animate-slide-in-left"
                >
                  <p className="text-sm font-semibold mb-2 text-[#A52A2A]">
                    {skill.skillName}
                  </p>
                  <Line 
                    percent={skill.percentage}
                    strokeWidth="2"
                    strokeColor="#A52A2A"
                    trailWidth="2"
                    trailColor="white"
                    strokeLinecap="square"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
