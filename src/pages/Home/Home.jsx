import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Hero from '../../components/Hero/Hero'
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'


const Home = () => {
  return (
    <div>
      <Hero /> 
      <AboutUs />
      <WhatWeDo />
    </div>
  )
}

export default Home