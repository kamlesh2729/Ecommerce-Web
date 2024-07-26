import React from 'react'

import Hero from '../Components/Hero'
import Proudproducts from '../Components/Proudproducts'
import TrendingSlider from '../Components/TrendingSlider'
import Testimonials from '../Components/Testimonials'

const Home = () => {

  return (
    <div className=' pt-12 relative'>
      <Hero />
      <Proudproducts />
      <TrendingSlider/>
      <Testimonials/>
    </div>
  )
}

export default Home