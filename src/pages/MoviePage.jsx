import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Check from '../assets/Rectangle 37.png';
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {TiTicket} from 'react-icons/ti'
import {BsFillStarFill, BsFillPlayFill} from 'react-icons/bs'


const MoviePage = () => {
  const [movie, setMovie] = useState(null); // Set an initial value of null

  useEffect(() => {
    const storedMovie = localStorage.getItem('Movie');

    try {
      const parsedMovie = JSON.parse(storedMovie);
      setMovie(parsedMovie);
    } catch (error) {
      // Handle JSON parsing error, e.g., invalid JSON in localStorage
      console.error('Error parsing movie data:', error);
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
  <div className="relative cursor-pointer">
    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='w-[72vw] rounded-[10px]' alt="" />
    <svg className='absolute top-[40%] left-[45%]' xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
  <g filter="url(#filter0_bd_1320_711)">
    <circle cx="60" cy="58" r="55" fill="white" fill-opacity="0.35" shape-rendering="crispEdges"/>
    <circle cx="60" cy="58" r="55" stroke="#E8E8E8" stroke-opacity="0.2" stroke-width="2" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_bd_1320_711" x="0" y="-2" width="120" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1320_711"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect1_backgroundBlur_1320_711" result="effect2_dropShadow_1320_711"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1320_711" result="shape"/>
    </filter>
  </defs>
</svg> 
<BsFillPlayFill className='absolute top-[41%] left-[47%] text-white w-[100px] h-[100px]'/>
<h4 className='absolute top-[62%] text-[25px] font-[500] text-white left-[43%]'>Watch Trailer</h4>
  </div>
    <div className="flex w-[72vw] mt-[31px] mb-[25px] items-center">
    <p className='text-[23px]'>{movie.title} • 2022 • PG-13 • 2h 10m</p>
    <button className='px-[16px] px[3px] rounded-[15px] hover:bg-[#F8E7EB] duration-[0.5s] mx-[11px] border border-[#F8E7EB]'>Action</button>
    <button className='px-[16px] px[3px] rounded-[15px] hover:bg-[#F8E7EB] duration-[0.5s] mx-[11px] border border-[#F8E7EB]'>Drama</button>
    <BsFillStarFill className='text-yellow-300 p-[3px] ms-auto w-[30px] h-[30px]' /> 
    <span className='text-[25px] font-[500]'> <span className='text-[#E8E8E8]'> {movie.vote_average}</span> | 350k</span>
    </div>
    <div className="flex w-[72vw]">
      <div className="w-[58%]">
    <p className=''>{movie.overview}</p>
    <p className='mt-[36px]'>Director : <span className='text-[#BE123C]'>Joseph Kosinski</span></p>
    <p className='mt-[36px]'>Writers : <span className='text-[#BE123C]'>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
    <p className='mt-[36px]'>Stars
: <span className='text-[#BE123C]'>Tom Cruise, Jennifer Connelly, Miles Teller</span> </p>
<div className="flex mt-[30px] justify-between items-center relative gap-0 text-[20px]  w-[58vw]">
<label htmlFor="toprated" className='px-[20px] py-[12px] bg-[#BE123C] absolute  z-[50] w-[253px] h-[55px] text-white rounded-[10px]'>Top rated movie #65</label>
<select name="" id="toprated" className='border border-[#C7C7C7] relative left-[230px] px-[25px] h-[55px] z-[0] rounded-[10px]'>
  <option value="">Awards 9 nominations</option>
  <option value="">Awards 9 nominations</option>
  <option value="">Awards 9 nominations</option> 
</select>
</div>
</div>
    <div className="w-[40%] m-auto">
    <div className='hover:bg-[#BE123C] transition-all duration-[0.5s] bg-[#F8E7EB] border-[2px] border-[#BE123C] flex justify-center items-center gap-x-[10px] hover:text-white cursor-pointer font-[500] w-[360px] h-[55px] text-[20px] rounded-[10px]'>
      <TiTicket className='w-[23px] h-[23px]'/>
      <span>See Showtimes</span>
      </div>
    <div className='bg-[#F8E7EB] transition-all duration-[0.5s] mt-[12px] hover:bg-[#BE123C] hover:text-white flex justify-center items-center gap-x-[10px] border-[2px] cursor-pointer border-[#BE123C] font-[500] w-[360px] h-[55px] text-[20px] rounded-[10px]'>
      <AiOutlineUnorderedList className='w-[23px] h-[23px]'/>
      <span>More watch options</span>
      </div>
    <div className='w-[360px] overflow-hidden relative h-[229px] rounded-[10px] mt-[33px]'>
    <img src={Check} alt="" />
    <div className="absolute h-[42px] w-[100%] bg-[#12121280] bottom-0 flex text-white justify-center items-center gap-x-[10px]">
    <AiOutlineUnorderedList className='w-[23px] h-[23px]'/>
      <span className='text-[14px]'>The Best Movies and Shows in September</span>
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
