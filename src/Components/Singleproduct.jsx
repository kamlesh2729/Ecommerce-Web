import React from 'react'
// import { useState } from "react"
// import { useParams } from "react-router"

import Trending from "./TrendingSlider";

const Singleproduct = () => {
  // const [quantity, setQuantity] = useState(1);

  // let { id } = useParams();
  
  return (
    <>
      <section className="w-full Lp-l:max-w-8lx h-auto mx-auto">
        <div className="flex flex-col Lp-l:flex-row">
          <div className=" w-[90%] Lp-l:w-1/2 mx-auto">
            <div>
              {/* <img src="" alt="product image" /> */}
            </div>
            <div className='flex'>
              <img src="" alt="Product image1" />
              <img src="" alt="product image2" />
              <img src="" alt="product image3" />
            </div>
          </div>
          <div className=" w-[90%] Lp-l:w-1/2 mx-auto">
            <h2>Product name</h2>
            <p>description</p>
            <span>
              <h2>Quantity</h2>
              <input type="number" name="" id="" />
              <h2>Price</h2>
            </span>
            <div>
              <button className="w-[250px] text-4h font-semibold p-3 rounded-md bg-white border-2 border-black border-solid text-black hover:bg-black hover:text-white hover:border-black">
                Add to Cart
              </button>
              <button className="w-[250px] text-4h font-semibold p-3 rounded-md border-2 border-red-600 border-solid bg-red-600 text-white hover:bg-transparent hover:text-red-600 hover:border-red-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <Trending />
      </section>
    </>
  );
}

export default Singleproduct