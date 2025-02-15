import React from "react";
import { Card, Row, Col, Button, Upload } from "antd";
import { UploadOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import CoreServices from "../Homepage/CoreServices";
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

const ProjectsSection = () => {
  const projects = [
    {
      title: "Irrigation Canal Construction in Nashik",
      description:
        "Successfully installed 3.014 km RCC pipelines to improve water distribution. The project enhanced irrigation efficiency and reduced water wastage for local farmers.",
      image: Pipe1,
      video: gallery1,
    },
    {
      title: "RCC Pipeline Installation for Water Management",
      description:
        "Implemented high-efficiency water supply networks for industrial clients, ensuring reliable and sustainable water distribution systems.",
      image: Pipe2,
      video: gallery2,
    },
    {
      title: "Government Collaboration for Rural Infrastructure",
      description:
        "Partnering with state authorities to develop sustainable drainage systems, improving local infrastructure for better flood control.",
      image: Pipe3,
      video: gallery3,
    },
    {
      title: "Smart City Project - Urban Drainage System",
      description:
        "Developed an advanced drainage network to support rapid urbanization, incorporating eco-friendly materials and technology.",
      image: Pipe4,
      video: gallery4,
    },
  ];

  const testimonials = [
    {
      quote:
        "Suviam Infra has been a reliable partner in our irrigation projects. Their RCC pipes are of exceptional quality, and their team ensures timely project execution.",
      author: "Government Project Engineer",
    },
    {
      quote:
        "As a private contractor, I trust Suviam Infra for all my infrastructure needs. Their commitment to quality and sustainability is unmatched.",
      author: "Infrastructure Developer",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto p-8 mt-30"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-palanquin text-center text-lg m-2 md:text-4xl font-bold"
      >
        Welcome to
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Suviam Infra
        </span>
        Private Limited
      </motion.h1>
      <p className="text-md md:text-lg text-center text-gray-600">
        Innovating Infrastructure, Strengthening Tomorrow
      </p>
      <p className="text-center text-md font-extralight md:text-lg text-gray-700 max-w-2xl mx-auto mt-2">
        At Suviam Infra Private Limited, we specialize in Reinforced Cement
        Concrete (RCC) pipe manufacturing and large-scale construction projects,
        ensuring quality, durability, and efficiency.
      </p>

      {/* Projects Section */}
      <h2 className="text-xl font-semibold mt-10 text-center text-blue-600">
        Our Latest Projects
      </h2>
      <Row gutter={[24, 24]} className="mt-6 font-palanquin">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                bordered={false}
                className="shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-3"
                cover={
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                }
              >
                <h3 className="font-palanquin font-bold text-gray-700 text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-extralight">
                  {project.description}
                </p>
                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  href={project.video}
                  target="_blank"
                  className="mt-2"
                >
                  Watch Video
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      {/* Core Services */}
      <CoreServices />
      {/* Testimonials */}
      <h2 className="text-3xl font-semibold mt-10 text-center text-blue-600">
        Testimonials
      </h2>
      <Row gutter={[24, 24]} className="mt-6">
        {testimonials.map((testimonial, index) => (
          <Col xs={24} sm={12} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow-lg rounded-lg border-l-4 border-blue-500 p-4">
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                <p className="font-bold mt-2 text-blue-700">
                  - {testimonial.author}
                </p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default ProjectsSection;
