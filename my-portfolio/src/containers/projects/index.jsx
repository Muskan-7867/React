import React from "react";
import { BsLaptop } from "react-icons/bs";
import Pageheader from "../../components/pageheader";

const projectsData = [
  {
    title: "Netflix",
    thumbnail: "src/images/n.jpg",
    githubLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
    vercelLink: "https://netflix-clone-xi-ruddy.vercel.app/",
  },
 
  {
    title: "YouTube",
    thumbnail: "src/images/yt.jpg",
    githubLink: "https://github.com/Muskan-7867/MY-youtube.git",
    vercelLink: "https://your-vercel-url-for-youtube-project.vercel.app",
  },
  {
    title: "Stopwatch",
    thumbnail: "src/images/stopwatch.jpeg",
    githubLink: "https://github.com/Muskan-7867/Stopwatch.git",
    vercelLink: "https://your-vercel-url-for-stopwatch.vercel.app",
  },
  {
    title: "Tic-Tac-Toe",
    thumbnail: "src/images/tic tac.jpg",
    githubLink: "https://github.com/Muskan-7867/Dragable-tic-tac-game.git",
    vercelLink: "https://your-vercel-url-for-tic-tac-toe.vercel.app",
  },
  {
    title: "Weather-App",
    thumbnail: "src/images/weather.jpg",
    githubLink: "https://github.com/Muskan-7867/Weather-app.git",
    vercelLink: "https://your-vercel-url-for-weather-app.vercel.app",
  },
  {
    title: "CHAT-AI",
    thumbnail: "src/images/ai.png",
    githubLink: "https://github.com/Muskan-7867/CHAT-AI.git",
    
  }
];

const Projects = () => {
  return (
    <section className="p-8 bg-transparent">
      <Pageheader
        headertext="My Projects"
        icon={<BsLaptop size={30} />}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-slide-in-left ">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative  bg-opacity-90 shadow-md rounded-lg overflow-hidden group"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 animate-slideInRight">
              <h3 className="text-xl font-bold text-[#A52A2A] mb-3">{project.title}</h3>
            </div>
            {/* Button container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-gray-800 to-transparent">
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mb-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
