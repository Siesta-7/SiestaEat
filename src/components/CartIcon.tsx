import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center justify-center gap-1'>
        <div className='relative h-6 w-6 md:w-5 md:h-5'>
            <Image src="/cart.png" alt="cart" fill />
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon