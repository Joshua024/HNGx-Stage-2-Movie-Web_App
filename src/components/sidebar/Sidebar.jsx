import React from 'react'
import TvLogo from '../../assets/tv.png'
import Projector from '../../assets/Movie Projector.png'
import TvShow from '../../assets/TV Show.png'
import Calender from '../../assets/Calendar.png'
import Logout from '../../assets/Logout.png'
import {GoHome} from 'react-icons/go' 
import {BiCameraMovie, BiLogIn} from 'react-icons/bi'
import {AiOutlineYoutube, AiOutlineUnorderedList} from 'react-icons/ai'
import {VscCalendar} from 'react-icons/vsc'
import { Link } from 'react-router-dom'





const Sidebar = () => {
  return (
    <>
    <div className="h-auto w-[22vw] py-[52px] rounded-r-[45px] border-[2px] border-solid border-gray-500">
      <div className="flex justify-center gap-x-[24px] items-center">
        <img src={TvLogo} className='cursor-pointer' alt=""/>
        <p className='text-[24px] font-[700] text-pink-500 cursor-pointer'>MovieBox</p>
      </div>
      <Link to={'/'} className="flex justify-center gap-x-[15px] mt-[105px] items-center  hover:bg-[#F8E7EB] hover:text-[#BE123C] cursor-pointer h-[86px] transition-all duration-[0.5s]">
        <GoHome className='w-[25px] h-[25px]'/>
        <p className='text-[20px] font-[600]'>Home</p>
      </Link>
      <Link to={'/'} className="flex justify-center gap-x-[15px]  items-center  hover:bg-[#F8E7EB] hover:text-[#BE123C] cursor-pointer h-[86px] transition-all duration-[0.5s]">
      <BiCameraMovie className='w-[25px] h-[25px]'/>
        <p className='text-[20px] font-[600]'>Movies</p>
      </Link>
      <Link to={'/'} className="flex justify-center gap-x-[15px]  items-center  hover:bg-[#F8E7EB] hover:text-[#BE123C] cursor-pointer h-[86px] transition-all duration-[0.5s]">
      <AiOutlineYoutube className='w-[25px] h-[25px]'/>
        <p className='text-[20px] font-[600]'>TV Series</p>
      </Link>
      <Link to={'/'} className="flex justify-center gap-x-[15px]  items-center  hover:bg-[#F8E7EB] hover:text-[#BE123C] cursor-pointer h-[86px] transition-all duration-[0.5s]">
      <VscCalendar className='w-[25px] h-[25px]'/>
        <p className='text-[20px] font-[600]'>Upcoming</p>
      </Link>
      <div className="rounded-[20px] w-[170px] mb-[3px] h-[210px] pt-[42px] pb-[16px] flex flex-col bg-[#F8E7EB] m-auto gap-x-[15px] mt-[3px] items-center">
        <p className='text-[15px] w-[135px] h-[69px] font-[600]'>Play movie quizes and earn free tickets</p>
        <p className='text-[12px] mt-[8px] w-[139px] h-[36px] font-[600]'>50k people are playing now</p>
        <Link to={'/'} className='py-[8px] mt-[8px] px-[17px] rounded-[36px] hover:bg-[#BE123C] hover:text-white font-[500] duration-[0.5s] text-[#BE123C] bg-[#F0C8D2]'>Start playing</Link>
      </div>
      <Link to={'/'} className="flex justify-center gap-x-[15px]  items-center  hover:bg-[#F8E7EB] hover:text-[#BE123C] cursor-pointer h-[86px] transition-all duration-[0.5s]">
      <BiLogIn className='w-[25px] h-[25px]'/>
        <p className='text-[20px] font-[600]'>Log out</p>
      </Link>
    </div>
      {/* <img src={Test} alt="" /> */}
    </>
  )
}

export default Sidebar
