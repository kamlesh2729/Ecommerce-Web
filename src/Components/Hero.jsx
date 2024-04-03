import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-[90%] mx-auto'>
    <div className=' grid grid-cols-con gap-4'>
        <div className='bg-red-300 h-[40rem]'>Electronics</div>
        <div className='bg-yellow-200 h-[40rem]'>Jewelery</div>
        <div className='h-[40rem] flex flex-col gap-4'>
        <div className='bg-purple-400 h-[20rem]'>Men's clothing</div>
        <div className='bg-orange-300 h-[20rem]'>Women's clothing</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero