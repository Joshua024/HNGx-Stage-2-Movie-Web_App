import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Check from "../assets/Rectangle 37.png";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TiTicket } from "react-icons/ti";
import { BsFillStarFill, BsFillPlayFill } from "react-icons/bs";

const MoviePage = () => {
  const [movie, setMovie] = useState(null); // Set an initial value of null

  useEffect(() => {
    const storedMovie = localStorage.getItem("Movie");

    try {
      const parsedMovie = JSON.parse(storedMovie);
      setMovie(parsedMovie);
    } catch (error) {
      // Handle JSON parsing error, e.g., invalid JSON in localStorage
      console.error("Error parsing movie data:", error);
    }
  }, []);

  if (!movie) {
    // Handle the case when movie is still null
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />

        {/* Rest of your code */}
        <div className="px-[51px] py-[38px]">
          <div className="relative cursor-pointer" data-testid={`movie-backdrop`}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-[72vw] rounded-[10px]"
              alt=""
            />
            <svg
              className="absolute left-[45%] top-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <g filter="url(#filter0_bd_1320_711)">
                <circle
                  cx="60"
                  cy="58"
                  r="55"
                  fill="white"
                  fill-opacity="0.35"
                  shape-rendering="crispEdges"
                />
                <circle
                  cx="60"
                  cy="58"
                  r="55"
                  stroke="#E8E8E8"
                  stroke-opacity="0.2"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bd_1320_711"
                  x="0"
                  y="-2"
                  width="120"
                  height="122"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1320_711"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_1320_711"
                    result="effect2_dropShadow_1320_711"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1320_711"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <BsFillPlayFill className="absolute left-[47%] top-[41%] h-[100px] w-[100px] text-white" />
            <h4 className="absolute left-[43%] top-[62%] text-[25px] font-[500] text-white">
              Watch Trailer
            </h4>
          </div>
          <div className="mb-[25px] mt-[31px] flex w-[72vw] items-center">
            <p className="text-[23px]" data-testid={`movie-title`}>{movie.title} • 2022 • PG-13 • 2h 10m</p>
            <button className="px[3px] mx-[11px] rounded-[15px] border border-[#F8E7EB] px-[16px] duration-[0.5s] hover:bg-[#F8E7EB]" data-testid={`movie-genre-action`}
>
              Action
            </button>
            <button className="px[3px] mx-[11px] rounded-[15px] border border-[#F8E7EB] px-[16px] duration-[0.5s] hover:bg-[#F8E7EB]" data-testid={`movie-genre-drama`}>
              Drama
            </button>
            <BsFillStarFill className="ms-auto h-[30px] w-[30px] p-[3px] text-yellow-300" />
            <span className="text-[25px] font-[500]">
              {" "}
              <span className="text-[#E8E8E8]"> {movie.vote_average}</span> |
              350k
            </span>
          </div>
          <div className="flex w-[72vw]">
            <div className="w-[58%]">
              <p className="" data-testid={`movie-overview`}>{movie.overview}</p>
              <p className="mt-[36px]" data-testid={`movie-director`}>
                Director :{" "}
                <span className="text-[#BE123C]">Joseph Kosinski</span>
              </p>
              <p className="mt-[36px]" data-testid={`movie-writers`}>
                Writers :{" "}
                <span className="text-[#BE123C]">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="mt-[36px]" data-testid={`movie-stars`}>
                Stars :{" "}
                <span className="text-[#BE123C]">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>{" "}
              </p>
              <div className="relative mt-[30px] flex w-[58vw] items-center justify-between gap-0  text-[20px]">
                <label
                  htmlFor="toprated"
                  className="absolute z-[50] h-[55px] w-[253px]  rounded-[10px] bg-[#BE123C] px-[20px] py-[12px] text-white"
                >
                  Top rated movie #65
                </label>
                <select
                  name=""
                  id="toprated"
                  className="relative left-[230px] z-[0] h-[55px] rounded-[10px] border border-[#C7C7C7] px-[25px]"
                >
                  <option value="">Awards 9 nominations</option>
                  <option value="">Awards 9 nominations</option>
                  <option value="">Awards 9 nominations</option>
                </select>
              </div>
            </div>
            <div className="m-auto w-[40%]">
              <div className="flex h-[55px] w-[360px] cursor-pointer items-center justify-center gap-x-[10px] rounded-[10px] border-[2px] border-[#BE123C] bg-[#F8E7EB] text-[20px] font-[500] transition-all duration-[0.5s] hover:bg-[#BE123C] hover:text-white" data-testid={`movie-see-showtimes-button`}>
                <TiTicket className="h-[23px] w-[23px]" />
                <span>See Showtimes</span>
              </div>
              <div className="mt-[12px] flex h-[55px] w-[360px] cursor-pointer items-center justify-center gap-x-[10px] rounded-[10px] border-[2px] border-[#BE123C] bg-[#F8E7EB] text-[20px] font-[500] transition-all duration-[0.5s] hover:bg-[#BE123C] hover:text-white">
                <AiOutlineUnorderedList className="h-[23px] w-[23px]" />
                <span>More watch options</span>
              </div>
              <div className="relative mt-[33px] h-[229px] w-[360px] overflow-hidden rounded-[10px]">
                <img src={Check} alt="" />
                <div className="absolute bottom-0 flex h-[42px] w-[100%] items-center justify-center gap-x-[10px] bg-[#12121280] text-white">
                  <AiOutlineUnorderedList className="h-[23px] w-[23px]" />
                  <span className="text-[14px]">
                    The Best Movies and Shows in September
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <img src={Test} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default MoviePage;
