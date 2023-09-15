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
        <img src={HeroBg} className="w-[72vw] rounded-[10px]" alt="" />
        <div className="mb-[25px] mt-[31px] flex w-[72vw] items-center">
          <p className="text-[23px]">
            Top Gun: Maverick • 2022 • PG-13 • 2h 10m
          </p>
          <button className="px[3px] mx-[11px] rounded-[15px] border border-[#F8E7EB] px-[16px] duration-[0.5s] hover:bg-[#F8E7EB]">
            Action
          </button>
          <button className="px[3px] mx-[11px] rounded-[15px] border border-[#F8E7EB] px-[16px] duration-[0.5s] hover:bg-[#F8E7EB]">
            Drama
          </button>
          <img src={Star} alt="" className="ms-auto h-[30px] w-[30px]" />
          <span className="text-[25px] font-[500]">
            {" "}
            <span className="text-[#E8E8E8]"> 8.5</span> | 350k
          </span>
        </div>
        <div className="flex w-[72vw]">
          <div className="w-[58%]">
            <p className="">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>
            <p className="mt-[36px]">
              Director : <span className="text-[#BE123C]">Joseph Kosinski</span>
            </p>
            <p className="mt-[36px]">
              Writers :{" "}
              <span className="text-[#BE123C]">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className="mt-[36px]">
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
            <div className="flex h-[55px] w-[360px] cursor-pointer items-center justify-center gap-x-[10px] rounded-[10px] border-[2px] border-[#BE123C] bg-[#F8E7EB] text-[20px] font-[500] transition-all duration-[0.5s] hover:bg-[#BE123C] hover:text-white">
              <img src={TwoTicket} alt="" />
              <span>See Showtimes</span>
            </div>
            <div className="mt-[12px] flex h-[55px] w-[360px] cursor-pointer items-center justify-center gap-x-[10px] rounded-[10px] border-[2px] border-[#BE123C] bg-[#F8E7EB] text-[20px] font-[500] transition-all duration-[0.5s] hover:bg-[#BE123C] hover:text-white">
              <img src={List} alt="" />
              <span>More watch options</span>
            </div>
            <div className="relative mt-[33px] h-[229px] w-[360px] overflow-hidden rounded-[10px]">
              <img src={Check} alt="" />
              <div className="absolute bottom-0 flex h-[42px] w-[100%] items-center justify-center gap-x-[10px] bg-[#6C4230] text-white">
                <img src={List} alt="" />
                <span className="text-[14px]">
                  The Best Movies and Shows in September
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <img src={Test} alt="" /> */}
      </div>
    </>
  );
};

export default Movie;
