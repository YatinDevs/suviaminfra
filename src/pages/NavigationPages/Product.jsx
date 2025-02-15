import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import { Pipe6, Pipe4, Pipe3, Pipe2 } from "../../../public/index"; // Ensure correct image imports

const products = [
  {
    title: "Plain And Socket Type RCC Pipes",
    description:
      "Suitable for various cross drainage and sewerage applications.",
    imageUrl: Pipe4,
  },
  {
    title: "Reinforced RCC Pipes Various Classes",
    description: "Designed for high-pressure applications and heavy loads.",
    imageUrl: Pipe3,
  },
  {
    title: "Specialized Articles",
    description: `Custom-designed solutions including Box Culverts, Ready-to-Install Manhole Chambers, U-Shape drains, etc.`,
    imageUrl: Pipe6,
  },
  {
    title: "U-Shape Drains",
    description: "Top-tier product with premium features.",
    imageUrl: Pipe2,
  },
];

const expertise = [
  {
    title: "Durability & Strength",
    description: "Engineered for longevity and high structural integrity.",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Sustainable production methods for a greener future.",
  },
  {
    title: "Custom Manufacturing",
    description: "Tailored solutions for diverse infrastructure needs.",
  },
];

const Product = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 py-16 px-6 md:px-12 text-white">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-extrabold mb-4">Our Products</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We offer a comprehensive range of RCC pipes, tailored for various
          applications.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product List */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4"
              >
                <h3 className="text-lg font-bold text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-2xl  rounded-2xl "
        >
          <Carousel autoplay autoplaySpeed={3000} effect="fade">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center hover:rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-72 md:h-110 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>

      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-4xl font-bold">Our Expertise</h2>
        <p className="text-lg max-w-3xl mx-auto mt-3">
          Our commitment to excellence is reflected in our cutting-edge RCC pipe
          solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-blue-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="/contactus"
          className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Contact Us for More Details
        </a>
      </motion.div>
    </div>
  );
};

export default Product;
