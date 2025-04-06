import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src="/product.png" alt='' width={150} height={150} className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="/product.png" alt='' width={150} height={150} className='absolute object-cover rounded-md '/>
        </div>
        <div className='flex justify-between'>
            <span className='font-median'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='tetx-sm text-gray-500'>My Description</div>
        <button className='rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:text-white hover:bg-[#F35C7A] w-max'>Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
