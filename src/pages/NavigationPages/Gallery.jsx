import React, { useEffect } from "react";
import {
  Pipe1,
  Pipe2,
  Pipe3,
  Pipe4,
  Pipe5,
  Pipe6,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
} from "../../../public/index";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import {
  FaTools,
  FaBuilding,
  FaIndustry,
  FaHammer,
  FaCogs,
} from "react-icons/fa";
import Img from "../../components/LazyLoadImage/Img";
import { motion } from "framer-motion";

const infrastructureImages = [Pipe1, Pipe2, Pipe3, Pipe4, Pipe5, Pipe6];
const constructionVideos = [gallery1, gallery2, gallery3, gallery4];

const serviceIcons = [
  { icon: <FaTools size={30} />, text: "Engineering" },
  { icon: <FaBuilding size={30} />, text: "Construction" },
  { icon: <FaIndustry size={30} />, text: "Industrial Setup" },
  { icon: <FaHammer size={30} />, text: "Fabrication" },
  { icon: <FaCogs size={30} />, text: "Maintenance" },
];

const PipeGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-40"
      >
        <div className="mx-auto pb-8 px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-center font-bold text-gray-700 text-md md:text-xl uppercase p-1">
              Infrastructure Projects
            </h2>
            <p className="text-center text-md md:text-lg mx-2 md:mx-5 mb-4">
              Suviam Infra specializes in large-scale infrastructure projects...
            </p>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-center text-lg md:text-xl uppercase p-1">
                Services
              </h3>
              <div className="flex flex-wrap gap-4 justify-center text-center mb-4">
                {serviceIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-3"
                  >
                    {item.icon}
                    <span className="mt-2">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mx-2 md:mx-5"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {infrastructureImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Img src={image} className="rounded-lg shadow-lg" />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-center font-bold text-gray-700 text-md md:text-xl uppercase p-1">
              Project Videos
            </h2>
            <p className="text-center text-md md:text-lg mx-2 md:mx-5 mb-4">
              Watch our latest construction and infrastructure projects...
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-5"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {constructionVideos.map((video, index) => (
                <motion.video
                  key={index}
                  controls
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-72 rounded-lg shadow-lg"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </ContentWrapper>
  );
};

export default PipeGallery;
