'use client'
import React, { useEffect, useState } from 'react'

const Countdown = () => {
    let difference = +new Date(`11/27/2023`) - +new Date()

    const [delay, setDelay] = useState(difference)

    const d = Math.floor(difference/(1000*60*60*24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const h = Math.floor(difference/(1000*60*60) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const m = Math.floor(difference/(1000*60) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const s = Math.floor(difference/(1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDelay(delay-1000)
        }, 1000)

        if (delay === 0) {
            clearInterval(timer)
        }
        return ()=> clearInterval(timer)
    })


  return (
    <div className='font-bold text-5xl text-yellow-300 '>
        {d}:{h}:{m}:{s}
    </div>
  )
}

export default Countdown
