import React, { useState, useEffect } from "react";
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

const PipeGallery = () => {
  const infrastructureImages = [
    { src: Pipe1 },
    { src: Pipe2 },
    { src: Pipe3 },
    { src: Pipe4 },
    { src: Pipe5 },
    { src: Pipe6 },
  ];

  const constructionVideos = [
    {
      src: gallery1,
    },
    { src: gallery2 },
    { src: gallery3 },
    { src: gallery4 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentWrapper>
      <div className="mt-40">
        <div className="mx-auto pb-8 px-4">
          <section className="mb-8">
            <h2 className="text-center font-cormorant font-bold text-gray-700 text-md md:text-xl uppercase p-1">
              Infrastructure Projects
            </h2>
            <p className="text-center font-cormorant text-md md:text-lg mx-2 md:mx-5 mb-4">
              Suviam Infra specializes in large-scale infrastructure projects,
              including road construction, pipeline installations, and
              industrial facility development. Our commitment to quality and
              innovation ensures sustainable and efficient solutions.
            </p>
            <section className="mb-4">
              <h3 className="text-center font-cormorant text-lg md:text-xl uppercase p-1">
                Services
              </h3>
              <div className="flex flex-wrap m-2 gap-4 justify-center text-center space-x-4 mb-4">
                <div className="flex flex-col items-center">
                  <FaTools size={30} />
                  <span className="font-cormorant mt-2">Engineering</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaBuilding size={30} />
                  <span className="font-cormorant mt-2">Construction</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaIndustry size={30} />
                  <span className="font-cormorant mt-2">Industrial Setup</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHammer size={30} />
                  <span className="font-cormorant mt-2">Fabrication</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCogs size={30} />
                  <span className="font-cormorant mt-2">Maintenance</span>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mx-2 md:mx-5">
              {infrastructureImages.map((image, index) => (
                <Img
                  key={index}
                  src={image.src}
                  className="aspect-w-1 aspect-h-1 md:p-2"
                />
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-8">
            <h2 className="text-center font-cormorant font-bold text-gray-700 text-md md:text-xl uppercase p-1">
              Project Videos
            </h2>
            <p className="text-center font-cormorant text-md md:text-lg mx-2 md:mx-5 mb-4">
              Watch our latest construction and infrastructure projects in
              action. These videos showcase our expertise in project execution,
              safety compliance, and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-5">
              {constructionVideos.map((video, index) => (
                <video key={index} controls className="w-full h-72 md:p-2">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PipeGallery;
