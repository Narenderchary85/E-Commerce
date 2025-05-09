import React from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'

const Listpage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
          <div className='hidden bg-pink-100 p-4 sm:flex justify-between h-64'>
            <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
              <h1 className='text-4xl font-semibold leading-[40px] text-gray-700'>GRab up to 50% Off on Selected Products</h1>
              <button className='rounded-3xl bg-[#F35C7A] text-white py-3 px-5 text-sm'>Buy Now</button>
            </div>
            <div className='relative w-1/3'>
              <Image src="/woman.png" alt='' fill className='object-contain'/>
            </div>
          </div>
        <Filter/>
        <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
        <ProductList/>
    </div>
  )
}

export default Listpage
