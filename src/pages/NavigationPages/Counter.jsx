import React from "react";

import CountUp from "react-countup";
import { FaProjectDiagram, FaUsers, FaBuilding } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Counter = () => {
  return (
    <div className="p-8 mt-20">
      {/* Animated Counters */}
      <div className="flex justify-around text-center mb-12">
        <div>
          <FaProjectDiagram className="text-4xl text-blue-600" />
          <h2 className="text-xl font-bold mt-2">
            <CountUp end={100} duration={3} />+
          </h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <FaUsers className="text-4xl text-blue-600" />
          <h2 className="text-xl font-bold mt-2">
            <CountUp end={10} duration={3} />+
          </h2>
          <p>Years of Experience</p>
        </div>
        <div>
          <FaBuilding className="text-4xl text-blue-600" />
          <h2 className="text-xl font-bold mt-2">
            <CountUp end={50} duration={3} />+
          </h2>
          <p>Clients Served</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
