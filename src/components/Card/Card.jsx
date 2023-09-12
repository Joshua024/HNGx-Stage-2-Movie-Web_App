// import React from 'react';
import "./Card.css";
import Poster from "../../assets/Poster.png";
// import Logo from "../assets/react.svg";
import Apple from "../../assets/Apple.png";
import Imdb from "../../assets/Imdb.png";
import Rating from "../../assets/Rating.png";

const Card = () => {
  return (
    <div className="flex justify-evenly w-full flex-wrap gap-4"> 
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    <div id="card" className="relative h-auto w-1/5 bg-rose-100 pb-2 text-left">
      {/* w-1/5 */}
      <img src={Poster} alt="" className="h-3/5 w-full" />
      <button className="w-50 absolute top-3 z-50 inline hover:bg-red-500">
        <img src={Rating} alt="" />
      </button>
      <h4 className="pt-3 font-bold text-gray-400">USA, 2021</h4>
      <h2 className="pt-3 font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="flex pt-3">
        <img src={Imdb} alt="" className="h-6 pe-3" />
        <span>79.0/100</span>
        <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
        <span className="">71%</span>
      </div>
      <h4 className="pt-3 font-medium text-gray-400">
        Action, Adventure, Fantasy
      </h4>
    </div>
    </div>
  );
};

export default Card;
