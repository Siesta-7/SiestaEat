"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    id:number;
    price:number;
    options?:{title:string; additionalPrice:number}[]
}
const Price = ({id, price, options}:Props) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(()=>{
        setTotal(quantity*(options ? price + options[selected].additionalPrice : price))
    },[quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
        <div className='flex gap-4'>
            {options?.map((option, index)=>(
                <button 
                key={option.title}
                style={{
                backgroundColor: selected === index ? "rgb(248 113 113)": "white", 
                color :selected === index ? "white" : "rgb(248 113 113)" 
                }} 
                className='min-w-[5rem] p-2 ring-1 ring-red-400 rounded-md' 
                 onClick={()=>setSelected(index)} >{option.title}</button>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between w-full p-3 ring-1 ring-red-500 '>
                <span>${total.toFixed(2)}</span>
                <div className='flex gap-3 items-center'>
                    <button onClick={()=>setQuantity(prev=>prev > 1 ? prev-1 : 1)} >{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>prev < 9 ? prev+1 : 9)} >{'>'}</button>
                </div>
            </div>
            <button className='uppercase p-3 w-56 bg-red-500 text-white ring-1 ring-red-500'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price