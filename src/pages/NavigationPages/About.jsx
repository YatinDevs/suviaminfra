import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { FaRegBuilding } from "react-icons/fa";
import { SiRenovate } from "react-icons/si";
import { FaPersonDigging } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import {
  Pipe1,
  Pipe2,
  Pipe3,
  Pipe4,
  Pipe5,
  Pipe6,
} from "../../../public/index";
import VisionaryLeaders from "../../components/Aboutus/VisionaryLeaders";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

// Sample images for the slider
const sliderImages = [Pipe1, Pipe2, Pipe3, Pipe4, Pipe5, Pipe6];

const expertise = [
  {
    title: "Manufacturing Excellence",
    description:
      "Producing high-quality NP3 & NP4 RCC pipes for infrastructure projects.",
  },
  {
    title: "Sustainable Engineering",
    description:
      "Providing cost-effective and eco-friendly solutions for large-scale projects.",
  },
  {
    title: "Trusted by Government & Private Sectors",
    description:
      "A reliable partner in infrastructure development across multiple industries.",
  },
];

const iconData = [
  {
    icon: <FaRegBuilding />,
    text: "Manufacturing high-quality NP3 & NP4 class RCC pipes for irrigation, drainage, and sewerage applications.",
  },
  {
    icon: <SiRenovate />,
    text: "Expertise in canal construction, RCC pipeline installations, and large-scale infrastructure projects.",
  },
  {
    icon: <FaPersonDigging />,
    text: "Providing sustainable, cost-effective, and innovative engineering solutions.",
  },
  {
    icon: <AiOutlinePicture />,
    text: "Trusted partner for government and private sector projects across multiple industries.",
  },
];

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-35 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 rounded-2xl"
      >
        <ContentWrapper>
          <div className="max-w-[1440px] flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* Image Slider */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  480: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              >
                {sliderImages.map((src, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <img
                      src={src}
                      alt={`slide-${index}`}
                      className="rounded-xl shadow-lg h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* About Us Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex flex-col gap-5 "
            >
              <h2 className="text-2xl text-center sm:text-4xl font-bold text-blue-800">
                About Us
              </h2>
              <p className="text-sm sm:text-lg p-2 text-gray-700">
                SUVIAM INFRA PRIVATE LIMITED is a leading construction company
                specializing in irrigation projects that enhance water
                management through canals and dams.
              </p>
              <p className="text-sm sm:text-lg p-2 text-gray-700">
                Established in 2023, we have built a strong reputation for
                delivering innovative and sustainable solutions tailored to meet
                the unique needs of our clients (Water Resource Department,
                Govt. of Maharashtra).
              </p>
            </motion.div>
          </div>
        </ContentWrapper>
      </motion.div>
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mx-8">
          {iconData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shadow-md py-6 px-4 rounded-lg flex items-center bg-white"
            >
              <div className="text-[#00afe9] text-2xl sm:text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-3 sm:p-4 mr-3 transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                {item.icon}
              </div>
              <div className="text-xs sm:text-lg text-gray-700">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Our Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-14 text-center px-4 mb-20"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800">
          Our Expertise
        </h2>
        <p className="text-md sm:text-lg max-w-3xl mx-auto mt-3 text-gray-700">
          Our commitment to quality and sustainability ensures top-tier
          solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-blue-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-md sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm sm:text-md text-gray-600 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visionary Leaders Section */}
      <VisionaryLeaders />
    </>
  );
}

export default About;
