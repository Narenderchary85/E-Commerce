'use client'
import React, { useState } from 'react'

const Add = () => {

    const [quantity,setQuantity]=useState(1)

  return (
    <div className='flex flex-col gap-4'>
    <h4 className='font-medium'>Choose a Quantiy</h4>
    <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
        <div className='bg-gray-200 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
            <button className='cursor-pointer text-xl'>-</button>
            {quantity}
            <button className='cursor-pointer text-xl'>+</button>
        </div>
        <div className='text-xs'>Only 4 items left! don't miss it</div>
        </div>
    <button className='w-36 text-sm rounded-3xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] 
    hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 diabled:text-white disabled:ring-none '>Add to Cart</button>
    </div>
    </div>
  )
}

export default Add
