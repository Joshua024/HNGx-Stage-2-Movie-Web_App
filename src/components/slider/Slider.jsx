import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slider.css";
import HeroBg1 from "../../assets/hero-bg.png";
import Imdb from "../../assets/Imdb.png";
import Apple from "../../assets/Apple.png";

const Slider = () => {
  const carouselContent = (
    <div className="ms-[98px] h-[285px] w-[404px] ">
      <p className="text-[48px] ">John Wick 3 : Parabellum</p>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>86.0/100</span>
        <img src={Apple} alt="" className="ms-[34px] h-6 pe-3" />
        <span className="">97%</span>
      </div>
      <p className="w-[302px] text-left text-[14px]">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button className="mt-[16px] h-[36px] w-[169px] rounded-[6px] border-[3px] border-[#BE123C] bg-[#BE123C] text-white duration-[0.5s] hover:bg-transparent">
        Watch trailer
      </button>
    </div>
  );

  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        autoplay: true,
        direction: "ttb",
        height: "33rem",
        arrows: false,
      }}
      aria-label="My Favorite Images"
      className="relative"
    >
      <SplideSlide className="realtive text-white">
        <img src={HeroBg1} alt="" />
        <div className="absolute top-[20%] z-50"> {carouselContent} </div>
      </SplideSlide>
      <SplideSlide className="relative text-white">
        <img src={HeroBg1} alt="" />
        <div className="absolute top-[20%] z-50"> {carouselContent} </div>
      </SplideSlide>
      <SplideSlide className="relative text-white">
        <img src={HeroBg1} alt="" />
        <div className="absolute top-[20%] z-50"> {carouselContent} </div>
      </SplideSlide>
      <SplideSlide className="relative text-white">
        <img src={HeroBg1} alt="" />
        <div className="absolute  top-[20%] z-50"> {carouselContent} </div>
      </SplideSlide>
      <SplideSlide className="relative text-white">
        <img src={HeroBg1} alt="" />
        <div className="absolute top-[20%] z-50"> {carouselContent} </div>
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
