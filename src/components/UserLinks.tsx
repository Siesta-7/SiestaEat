"use client"
import React from 'react'
import {useSession, signOut} from "next-auth/react"
import Link from 'next/link'


const UserLinks = () => {
    const {status}= useSession()
  return (
    <div>
        {status === "authenticated" ?
        (<div>
            <Link href="/orders">ORDERS</Link>
            <span onClick={()=>signOut()} className='ml-4 cursor-pointer' >LOGOUT</span>
        </div>)
        :
        (<Link href="/login">LOGIN</Link>)
        

        }
    </div>
  )
}

export default UserLinks