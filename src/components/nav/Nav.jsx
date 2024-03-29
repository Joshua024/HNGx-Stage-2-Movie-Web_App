import React from "react";
import TvLogo from "../../assets/tv.png";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between bg-transparent px-[98px] py-[15px]">
        <div className="flex items-center justify-center gap-x-[24px]">
          <img src={TvLogo} className="cursor-pointer" alt="" />
          <p className="cursor-pointer text-[24px] font-[700] text-white">
            MovieBox
          </p>
        </div>
        <div className="relative flex items-center justify-center gap-x-[24px]">
          <input
            type="text"
            id="inputText"
            className="w-[525px] rounded-[6px] border-[2px] border-[#D1D5DB] bg-transparent px-[10px] py-[6px] "
          ></input>
          <svg
            className="absolute right-[2%] "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-x-[24px] text-white">
          <span className="text-[16px] font-[700]">Sign in</span>
          <svg
            className="h-[36px] w-[36px] rounded-full bg-[#BE123C]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Nav;
