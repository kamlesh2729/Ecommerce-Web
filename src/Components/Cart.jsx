import React from 'react'

import Product from "../Assets/women4.jpg"
import { TbLetterX } from "react-icons/tb";

const Cart = () => {
  return (
    <>
      <section className=" max-w-8lx Lp-l:max-w-8lx h-auto mx-auto">
        <h2>Your shopping cart(0)</h2>
        <div className=" h-[70vh] overflow-scroll">
          <div className=" w-full h-[20vh] flex border boder-solid border-black mb-4">
          <div className=' w-[20vw] h-[20vh]'>
          <img src={Product} alt="product"  className='w-full h-full object-center'/>
          </div>
          <div className=' w-[20vw] h-[20vh]'>
            <h2 className=" text-bh2 font-semibold mt-2 mb-2">Product name</h2>
            <div className=" Lp-l:w-36 Lp-l:h-14 flex justify-center items-center text-h3 border border-black">
                <button className=" w-20 Lp-l:h-14 text-h3 text-center border-r Lp-l:border-y border-black bg-gray-200">
                  -
                </button>
                <p className=" w-20 text-center text-h3 bg-transparent">1</p>
                <button className=" w-20 Lp-l:h-14 text-h3 text-center border-l Lp-l:border-y border-black bg-gray-200">
                  +
                </button>
            </div>
          </div>
          <div className=' w-[20vw] h-[20vh] flex flex-col'>
          <h3 className=" text-bh2 font-semibold mt-2 mb-2">price</h3>
          <button className='w-20 Lp-l:h-14 text-h3 text-center border-black'><TbLetterX/></button>
          </div>
          </div>
        </div>
        <div className=" flex border-t-2 border-dashed border-black">
          <h3>subtotal amount</h3>
          <button className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-black border-solid bg-transparent text-black hover:bg-black hover:text-white hover:border-black">
          Go To Checkout
          </button>
        </div>
      </section>
    </>
  );
}

export default Cart