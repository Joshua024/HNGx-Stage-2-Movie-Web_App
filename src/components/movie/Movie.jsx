// import React from 'react'
// import HeroBg from '../../assets/hero-bg.png'
// import Star from '../../assets/Star.png'
// import TwoTicket from '../../assets/Two Tickets.png'
// import List from '../../assets/List.png'
// import Check from '../../assets/Rectangle 37.png'
// import Test from '../../assets/Movies-1.png'

const Movie = () => {
  return (
    <>
    <div className="px-[51px] py-[38px]">
    <img src={HeroBg} className='w-[72vw] rounded-[10px]' alt="" />
    <div className="flex w-[72vw] mt-[31px] mb-[25px] items-center">
    <p className='text-[23px]'>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</p>
    <button className='px-[16px] px[3px] rounded-[15px] hover:bg-[#F8E7EB] duration-[0.5s] mx-[11px] border border-[#F8E7EB]'>Action</button>
    <button className='px-[16px] px[3px] rounded-[15px] hover:bg-[#F8E7EB] duration-[0.5s] mx-[11px] border border-[#F8E7EB]'>Drama</button>
    <img src={Star} alt="" className='ms-auto w-[30px] h-[30px]' /> 
    <span className='text-[25px] font-[500]'> <span className='text-[#E8E8E8]'> 8.5</span> | 350k</span>
    </div>
    <div className="flex w-[72vw]">
      <div className="w-[58%]">
    <p className=''>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
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
      <img src={TwoTicket} alt="" />
      <span>See Showtimes</span>
      </div>
    <div className='bg-[#F8E7EB] transition-all duration-[0.5s] mt-[12px] hover:bg-[#BE123C] hover:text-white flex justify-center items-center gap-x-[10px] border-[2px] cursor-pointer border-[#BE123C] font-[500] w-[360px] h-[55px] text-[20px] rounded-[10px]'>
      <img src={List} alt="" />
      <span>More watch options</span>
      </div>
    <div className='w-[360px] overflow-hidden relative h-[229px] rounded-[10px] mt-[33px]'>
    <img src={Check} alt="" />
    <div className="absolute h-[42px] w-[100%] bg-[#6C4230] bottom-0 flex text-white justify-center items-center gap-x-[10px]">
    <img src={List} alt="" />
      <span className='text-[14px]'>The Best Movies and Shows in September</span>
    </div>
    </div>
    </div>
    </div>
    
{/* <img src={Test} alt="" /> */}
    </div>
    </>
  )
}

export default Movie