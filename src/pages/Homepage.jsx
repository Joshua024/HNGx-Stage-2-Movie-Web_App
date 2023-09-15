import React from 'react';
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Footer from "../components/footer/Footer"
import Features from '../components/features/Features';


const Homepage = () => {
  return (
    <>
    <Hero/>
    <Features/>
    <Card/>
    <Footer/>
    </>
  )
}

export default Homepage