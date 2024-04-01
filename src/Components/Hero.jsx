import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-[90%] bg-blue-300 mx-auto'>
    <div className=' grid grid-cols-con gap-4'>
        <div className='bg-red-300 h-[30rem]'>Electronics</div>
        <div className='bg-yellow-200 h-[30rem]'>Jewelery</div>
        <div className='h-[30rem]'>
        <div className='bg-purple-400 h-[15rem]'>Men's clothing</div>
        <div className='bg-orange-300 h-[15rem]'>Women's clothing</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero