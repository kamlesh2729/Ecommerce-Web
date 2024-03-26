import React, { useEffect, useState } from 'react'

import Axio from 'axios'
import Products from '../Components/Products'

const Home = () => {
let [data, setData] = useState([])

  const api = "https://fakestoreapi.com/products";
  
  const GetAllproducts = async () => {
  try {
    const products = await Axio.get(api);
    // console.log(products.data);
    setData(products);
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    GetAllproducts();
  },[data])

  return (
    <div className=' pt-12 relative'>
      <Products/>
    </div>
  )
}

export default Home