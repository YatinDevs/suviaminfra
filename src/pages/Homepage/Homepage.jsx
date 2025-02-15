import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Whatsapppop from "../../components/Popup/Whatsapppop";
import Accordion from "./Accordian";
import VideoSection from "./VideoSection";
import CoreServices from "./CoreServices";
import Counter from "../NavigationPages/Counter";

function Homepage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      {/* Dark Overlay */}
      <div className="relative h-20 shadow-b-2xl">
        <div className="absolute  inset-0 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-950"></div>
      </div>{" "}
      <VideoSection />
      <FeatureSection />
      <CoreServices />
      <Counter />
      <Testimonials />
      <Accordion />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
