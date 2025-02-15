import React from "react";
import { leadersData } from "../../constants/About";
import { star } from "../../../public/assets/icons";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const VisionaryLeaders = () => {
  return (
    <section className="max-container  bg-blue-50 py-24 text-gray-700">
      <ContentWrapper>
        <h3 className="font-palanquin text-center my-10 text-3xl md:text-4xl font-bold">
          Our
          <span className="mr-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            Visionary
          </span>
          Leaders
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {leadersData.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center  "
            >
              <img
                alt={leader.name}
                src={leader.image}
                className=" w-[120px] h-[120px] rounded-full object-cover  "
              />
              <h3 className="mt-4 font-palanquin text-xl md:text-2xl text-center font-bold ">
                {leader.name}
              </h3>{" "}
              <h4 className="mt-1 font-palanquin text-md md:text-lg text-center font-bold ">
                {leader.title}
              </h4>{" "}
              <p className="info-text text-center md:text-md mt-2 max-w-sm ">
                {leader.description}
              </p>
              <div className="mt-3 flex justify-center items-center gap-2.5 ">
                <p className="text-xl font-montserrat text-slate-gray"></p>
              </div>
            </div>
          ))}{" "}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default VisionaryLeaders;
