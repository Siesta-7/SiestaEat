'use client';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const Menu = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { id:1, title:"Homepage", url:"/" },
    { id:2, title:"Menu", url:"/menu" },
    { id:3, title:"Working Hours", url:"/" },
    { id:4, title:"Contact", url:"/"}
  ]
  const user = false
  return (
    <div >
      {
      open ? <Image className='cursor-pointer' src="/close.png" alt='open' height={20} width={20} onClick={()=>setOpen(false)}/>:
      <Image className='cursor-pointer' src="/open.png" alt='close' height={20} width={20} onClick={()=>setOpen(true)}/>
      }
      {open && <div className='bg-red-500 text-white absolute gap-8 left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center z-10 '>
        {links.map(item=>(
          <Link key={item.id} href={item.url} onClick={()=>setOpen(false)}>{item.title}</Link>
        ))}
        {!user ? <Link href='/login' onClick={()=>setOpen(false)}>LOGIN</Link>:
        <Link href='/orders' onClick={()=>setOpen(false)}>ORDERS</Link>}
        <Link href='/cart' onClick={()=>setOpen(false)}><CartIcon/></Link>
      </div>}
    </div>
  )
}

export default Menu