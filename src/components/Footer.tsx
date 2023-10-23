import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 p-4 md:h-24 md:px-8 lg:px-20 xl:px-28 flex items-center justify-between text-red-500 uppercase '>
      <Link className='font-bold text-xl' href="/">Massimo</Link>
      <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer