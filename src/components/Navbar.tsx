import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'
import UserLinks from './UserLinks'


const Navbar = () => {
  
  return (
    <div className='h-12 p-4 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-12 xl:px-28'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>   
      </div>
      {/*LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">SiestaEat</Link>
      </div>

      {/*MOBILE MENU*/}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 flex-1 justify-end'>
        <div className='px-1 bg-orange-300 flex items-center justify-center cursor-pointer rounded-md md:absolute top-3 r-2 lg:static'>
          <Image src="/phone.png" alt='phone' height={20} width={20}  />
          <span>123 456 789</span>
        </div>
        <UserLinks/>
        <Link href="/cart"><CartIcon/></Link>   
      </div>
    </div>
  )
}

export default Navbar