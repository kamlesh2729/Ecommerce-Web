import React from 'react'

import Hero from '../Components/Hero'
import Proudproducts from '../Components/Proudproducts'
import TrendingSlider from '../Components/TrendingSlider'

const Home = () => {

  return (
    <div className=' pt-12 relative'>
      <Hero />
      <Proudproducts />
      <TrendingSlider/>
    </div>
  )
}

export default Home