import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row '>
      <div className='h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 xl:w-1/2 lg:px-12 xl:px-28'>
        <div className='overflow-y-auto px-3 flex flex-col gap-4'>
        <div className='flex items-center justify-between  '>
          <Image src="/temporary/p1.png" alt='' width={90} height={90}/>
          <div className=''>
            <h1 className='text-xl font-bold uppercase' >Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$80.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between  '>
          <Image src="/temporary/p1.png" alt='' width={90} height={90}/>
          <div className=''>
            <h1 className='text-xl font-bold uppercase' >Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$80.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>    
        <div className='flex items-center justify-between  '>
          <Image src="/temporary/p1.png" alt='' width={90} height={90}/>
          <div className=''>
            <h1 className='text-xl font-bold uppercase' >Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$80.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>   
        </div>
      </div>
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:px-12 xl:px-28 xl:text-lg xl:gap-4'>
        <div className='flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-1' />
        <div className='flex justify-between'>
          <span>TOTAL</span>
          <span className='font-bold'>$81.70</span>
        </div>
        <button className= 'bg-red-500 text-white p-3 rounded-md min-w-[7rem] w-[30%] self-end '>CHECKOUT</button>
      </div>
      
    </div>
  )
}

export default Cart