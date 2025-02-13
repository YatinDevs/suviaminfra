import React from "react";
import { Card } from "antd";
import { FaWater, FaHardHat, FaRoad } from "react-icons/fa";
import { Pipe1, Pipe2, Pipe3 } from "../../../public/index";
const projects = [
  {
    title: "Irrigation Canal Construction in Nashik",
    description:
      "Successfully installed 3.014 km RCC pipelines to improve water distribution.",
    image: Pipe1,
    icon: <FaWater />,
  },
  {
    title: "RCC Pipeline Installation for Water Management",
    description:
      "Implemented high-efficiency water supply networks for industrial clients.",
    image: Pipe2,
    icon: <FaHardHat />,
  },
  {
    title: "Government Collaboration for Rural Infrastructure",
    description:
      "Partnering with state authorities to develop sustainable drainage systems.",
    image: Pipe3,
    icon: <FaRoad />,
  },
];

const ProjectsSection = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 py-16 px-6 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Latest Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            hoverable
            className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 relative"
          >
            {/* Image Section with Overlay */}
            <div className="relative">
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Custom High-Contrast Gradient Button */}
              <div className="mt-4 flex gap-5 justify-center items-center text-white w-full py-2 rounded-lg  font-semibold bg-gradient-to-r from-blue-500 via-300 to-blue-200 transition-all duration-300 hover:shadow-lg hover:opacity-90">
                <div>Read More</div>
                <div className="text-white text-2xl   rounded-full flex justify-center items-center  cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-white hover:text-[#FFC107] w-10 h-10">
                  {project.icon}
                </div>{" "}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
