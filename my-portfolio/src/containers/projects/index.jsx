import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Pageheader from "../../components/pageheader";



const projectsData = [
  {
    title: "Netflix",
    thumbnail: "src/images/n.jpg",
    githubLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
  },
  {
    title: "Todo-App",
    thumbnail: todoThumbnail,
    githubLink: "https://github.com/yourusername/project-two",
  },
  {
    title: "YouTube",
    thumbnail: youtubeThumbnail,
    githubLink: "https://github.com/yourusername/project-three",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="p-8 bg-transparent">
      <Pageheader
        headertext="My Projects"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="relative bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <a
                href={project.githubLink}
                className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 hover:opacity-70 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
