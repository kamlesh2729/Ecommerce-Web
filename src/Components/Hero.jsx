import React from 'react'
import { Link } from 'react-router-dom';

import Electronics from '../Assets/home-img-4.jpg';

const Hero = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className=" grid grid-cols-con gap-4">
          <div className="h-[40rem] overflow-hidden cursor-pointer relative">
            <Link>
              <div className="absolute w-full h-full top-0 left-0 hover:bg-black hover:opacity-15 hover:z-2"></div>
              <p className="font-semibold text-white text-4h absolute bottom-4 left-6">Men's Clothing</p>
              <img src={Electronics} alt="Jewelery-img" className='w-full h-full' />
            </Link>
          </div>
          <div className="h-[40rem] overflow-hidden cursor-pointer relative">
            <Link>
              <div className="absolute w-full h-full top-0 left-0 hover:bg-black hover:opacity-10 hover:z-2"></div>
              {/* <img src="" alt="Women's Clothing-img" /> */}
              <p className="font-semibold text-white text-4h absolute bottom-4 left-6">Women's Clothing</p>
              <img src={Electronics} alt="Jewelery-img" className='w-full h-full' />
            </Link>
          </div>
          <div className="h-[40rem] flex flex-col gap-4">
            <div className="h-[20rem] overflow-hidden cursor-pointer relative">
              <Link>
                <div className="absolute w-full h-full top-0 left-0 hover:bg-black hover:opacity-10 hover:z-2"></div>
                <p className="font-semibold text-white text-4h absolute bottom-2 left-6"> Jewelery</p>
                <img src={Electronics} alt="Jewelery-img" />
              </Link>
            </div>
            <div className="h-[20rem] overflow-hidden cursor-pointer relative">
              <Link>
                <div className="absolute w-full h-full top-0 left-0 hover:bg-black hover:opacity-10 hover:z-2"></div>
                <p className="font-semibold text-white text-4h absolute bottom-2 left-6">Electronics</p>
                <img src={Electronics} alt="Jewelery-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero