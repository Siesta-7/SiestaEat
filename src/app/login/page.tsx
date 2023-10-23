"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useSession, signIn} from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {

  const {data, status} = useSession()
  const router = useRouter()
  
  console.log("data: " + data )
  console.log("status: " + status)

  if(status === "loading"){
    return <p>Loading</p>
  }

  if (status === "authenticated"){
    router.push("/")
  }
  return (
    <div className='p-4 h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl rounded-md overflow-clip flex flex-col md:flex-row md:h-[70%]  md:w-[90%] lg:w-[70%] xl:w-1/2  '>
        <div className='relative h-1/3 w-full md:h-full md:w-1/2 '>
          <Image src="/loginBg.png" alt='' fill className='object-cover ' />
        </div>
        <div className='p-8 flex flex-col gap-4 md:w-1/2' >
          <h1 className='font-bold text-xl xl:text-2xl' >Welcome</h1>
          <p>Login to your account or create a new one</p>
          <button onClick={()=>signIn("google")} className='flex items-center gap-4 p-3 ring-1 ring-orange-100 rounded-md ' >
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain' />
            <span>Sign in with Google</span>
          </button>
          <button className='flex items-center gap-4 p-3 ring-1 ring-blue-100 rounded-md' >
            <Image src="/facebook.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with your Facebook</span>
          </button>
          <p className='text-sm' >
            Have a problem?<Link className='underline' href="/" >Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login