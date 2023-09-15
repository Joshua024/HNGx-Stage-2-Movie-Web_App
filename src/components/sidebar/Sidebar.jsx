import React from "react";
import TvLogo from "../../assets/tv.png";
import Projector from "../../assets/Movie Projector.png";
import TvShow from "../../assets/TV Show.png";
import Calender from "../../assets/Calendar.png";
import Logout from "../../assets/Logout.png";
import { GoHome } from "react-icons/go";
import { BiCameraMovie, BiLogIn } from "react-icons/bi";
import { AiOutlineYoutube, AiOutlineUnorderedList } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="h-auto w-[22vw] rounded-r-[45px] border-[2px] border-solid border-gray-500 py-[52px]">
        <div className="flex items-center justify-center gap-x-[24px]">
          <img src={TvLogo} className="cursor-pointer" alt="" />
          <p className="cursor-pointer text-[24px] font-[700] text-pink-500">
            MovieBox
          </p>
        </div>
        <Link
          to={"/"}
          className="mt-[105px] flex h-[86px] cursor-pointer items-center  justify-center gap-x-[15px] transition-all duration-[0.5s] hover:bg-[#F8E7EB] hover:text-[#BE123C]"
        >
          <GoHome className="h-[25px] w-[25px]" />
          <p className="text-[20px] font-[600]">Home</p>
        </Link>
        <Link
          to={"/"}
          className="flex h-[86px] cursor-pointer  items-center  justify-center gap-x-[15px] transition-all duration-[0.5s] hover:bg-[#F8E7EB] hover:text-[#BE123C]"
        >
          <BiCameraMovie className="h-[25px] w-[25px]" />
          <p className="text-[20px] font-[600]">Movies</p>
        </Link>
        <Link
          to={"/"}
          className="flex h-[86px] cursor-pointer  items-center  justify-center gap-x-[15px] transition-all duration-[0.5s] hover:bg-[#F8E7EB] hover:text-[#BE123C]"
        >
          <AiOutlineYoutube className="h-[25px] w-[25px]" />
          <p className="text-[20px] font-[600]">TV Series</p>
        </Link>
        <Link
          to={"/"}
          className="flex h-[86px] cursor-pointer  items-center  justify-center gap-x-[15px] transition-all duration-[0.5s] hover:bg-[#F8E7EB] hover:text-[#BE123C]"
        >
          <VscCalendar className="h-[25px] w-[25px]" />
          <p className="text-[20px] font-[600]">Upcoming</p>
        </Link>
        <div className="m-auto mb-[3px] mt-[3px] flex h-[210px] w-[170px] flex-col items-center gap-x-[15px] rounded-[20px] bg-[#F8E7EB] pb-[16px] pt-[42px]">
          <p className="h-[69px] w-[135px] text-[15px] font-[600]">
            Play movie quizes and earn free tickets
          </p>
          <p className="mt-[8px] h-[36px] w-[139px] text-[12px] font-[600]">
            50k people are playing now
          </p>
          <Link
            to={"/"}
            className="mt-[8px] rounded-[36px] bg-[#F0C8D2] px-[17px] py-[8px] font-[500] text-[#BE123C] duration-[0.5s] hover:bg-[#BE123C] hover:text-white"
          >
            Start playing
          </Link>
        </div>
        <Link
          to={"/"}
          className="flex h-[86px] cursor-pointer  items-center  justify-center gap-x-[15px] transition-all duration-[0.5s] hover:bg-[#F8E7EB] hover:text-[#BE123C]"
        >
          <BiLogIn className="h-[25px] w-[25px]" />
          <p className="text-[20px] font-[600]">Log out</p>
        </Link>
      </div>
      {/* <img src={Test} alt="" /> */}
    </>
  );
};

export default Sidebar;
