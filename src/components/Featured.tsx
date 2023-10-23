import { ProductType } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const getData = async() =>{

   const res =  await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
   })
   
   if(!res.ok){
    throw new Error("Failed!")
   }
   
   return res.json()
}


const Featured = async() => {
  
  const featuredProducts: ProductType = await getData()

  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEM */}
        {featuredProducts.map(item=>(
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-3 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh] '>
          {/* IMAGE CONTAINER */}
          {item.img && <div className=' flex-1 relative w-full lg:w-3/5 hover:rotate-[30deg] transition-all duration-500 '>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>}
          {/* TEXT CONTAINER */}
          <div className='flex-1 flex flex-col items-center justify-center gap-2 text-center'>
            <h1 className='text-sm font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
            <p className='p-4 xl:p-8 text-sm'>{item.desc}</p>
            <span className='text-lg font-bold'>${item.price}</span>
            <button className='bg-red-500 text-white rounded-md p-2 text-sm'>Add to Cart</button>
          </div>
        </div>  
        ))}
      </div>
    </div>
  )
}

export default Featured