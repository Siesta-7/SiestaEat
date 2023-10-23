import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'

const Offer = () => {
  return (
    <div className='h-screen bg-black flex flex-col md:flex-row md:h-[70vh] md:bg-[url("/offerBg.png")]'>
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-6 p-5'>
        <h1 className='text-white font-bold text-4xl  md:text-5xl xl:text-6xl '>Delicious Burger & French Fry</h1>
        <p className='text-white text-xl'>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Lorem ipsum.</p>
        <Countdown/>
        <button className=' bg-red-500 text-white py-3 px-6 rounded-md'>Order Now</button>
      </div>
      <div className='flex-1 relative'>
        <Image src="/offerProduct.png" alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer