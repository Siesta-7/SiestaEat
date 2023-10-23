import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductType } from '@/types/types'


const getData = async(category:string)=>{

  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`,{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed!")
  }
  return res.json()

}
 type Props = {
  params:{category:string}
 }
 
const CategoryPage = async({params}:Props) => {

  const products:ProductType = await getData(params.category)
  
  return (
    <div className='flex flex-wrap text-red-500 '>
      {products.map((item)=>(
        <Link href={`/product/${item.id}`} className='flex flex-col justify-between group w-full h-[70vh] sm:w-1/2 lg:w-1/3 border-r-2 border-b-2 border-red-500 p-4 xl:p-8 odd:bg-fuchsia-50'>
       {item.img &&
        <div className='relative h-[80%]'>
          <Image src={item.img} alt='' fill className='object-contain' />
        </div>
        }     
        <div className='max-h-[3rem] flex items-center justify-between font-bold' >
          <h1 className='text-lg uppercase p-2'>{item.title}</h1>
          <h1 className='group-hover:hidden text-xl'>${item.price}</h1>
          <button className='min-w-[9rem] hidden group-hover:block uppercase p-2 bg-red-500 text-white rounded-md'>Add to Cart</button>
        </div>
        </Link>   
      ))}
      
    </div>
  )
}

export default CategoryPage