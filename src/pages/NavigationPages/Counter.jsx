import React from "react";
import CountUp from "react-countup";
import { FaProjectDiagram, FaUsers, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div className="p-8 mt-20" ref={ref}>
      {/* Animated Counters */}
      <div className="flex flex-col md:flex-row justify-around text-center mb-12 gap-8">
        {[
          {
            icon: <FaProjectDiagram />,
            count: 100,
            label: "Projects Completed",
          },
          { icon: <FaUsers />, count: 10, label: "Years of Experience" },
          { icon: <FaBuilding />, count: 50, label: "Clients Served" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl text-blue-800 mb-2">{item.icon}</div>
            <h2 className="text-2xl font-bold text-blue-800">
              {inView ? <CountUp end={item.count} duration={3} /> : 0}+
            </h2>
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Counter;
