import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [background, setBackground] = useState(
    "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    const images = [
      "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setBackground(randomImage);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative shadow-2xl mt-20 w-full h-[500px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Transition */}
      <motion.div
        key={background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-10 via-blue-50 to-blue-900 shadow-2xl"></div>

      {/* Content with Motion */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl text-gray-800 lg:text-7xl font-bold tracking-wide">
          SUVIAM INFRA{" "}
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            PRIVATE LIMITED
          </span>
        </h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Welcome to Suviam, a leading name in construction and manufacturing.
          We specialize in delivering innovative solutions for irrigation
          projects and producing high-quality RCC pipes and cement articles.
        </motion.p>

        {/* Download Button with Hover Effect */}
        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/assets/Suviam_Infra_Company_Profile.pdf"
            download="Suviam_Profile.pdf"
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            DOWNLOAD PROFILE
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
