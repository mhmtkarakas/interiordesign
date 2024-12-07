import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Hero from '../../components/Hero/Hero'
import Slider from '../../components/Slider/Slider'
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'
import WhyUs from '../../components/WhyUs/WhyUs'


const Home = () => {
  return (
    <div>
      <Hero /> 
      <AboutUs />
      <WhatWeDo />
      <Slider />
      {/* <WhyUs /> */}
    </div>
  )
}

export default Home