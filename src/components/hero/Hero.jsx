import React from "react";
import Nav from "../nav/Nav";
import Slider from "../slider/Slider";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 z-50 w-full">
          <Nav />
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Hero;
