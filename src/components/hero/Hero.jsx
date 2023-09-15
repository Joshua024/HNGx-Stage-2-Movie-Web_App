import React from 'react'
import Nav from '../nav/Nav'
import Slider from '../slider/Slider'

const Hero = () => {
  
 

  return (
    <>
    <div className="relative">
      <div className="absolute w-screen z-50 top-0">
      <Nav/>
      </div>
    <Slider/>
    </div>

 {/* <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        autoplay: true,
        direction: 'ttb',
        height   : '25rem',
        arrows:false
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide  className='splide__pagination' >
        <img src={HeroBg} alt=""/>
      </SplideSlide>
      <SplideSlide className='splide__pagination'>
      <img src={HeroBg} alt=""/>
      </SplideSlide>
      <SplideSlide className='splide__pagination'>
      <img src={HeroBg} alt=""/>
      </SplideSlide>
    </Splide> */}
    </>
  )
}

export default Hero

