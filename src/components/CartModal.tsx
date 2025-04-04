import React from 'react';
import Image from 'next/image';

const CartModal = () => {
    const cartItems=true;
  return (
    <div className='w-max  absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white top-16 right-65  flex flex-col gap-6 z-20'>
      {
        cartItems ? (
            <>
        <h2 className='text-xl'>Shopping Cart</h2>
        <div className='flex flex-col gap-8'>

            <div className='flex gap-4'>
                <Image src="" alt="" width={72} height={96} className='object-cover rounded-md'/>
                <div className='flex flex-col justify-between w-full '>
                    <div className=''>
                        <div className='flex items-center justify-between gap-8'>
                            <h3 className='font-semibold'>Product Name</h3>
                            <div className='p-1 bg-gray-100 rounded-sm'>$49</div>
                        </div>
                        <div className='text-sm text-gary-500'>
                            available
                        </div>
                    </div>
                    <div className='flex justify-between text-sm'>
                        <span className='text-sm text-gary-500'>Qty 2</span>
                        <span className='text-sm text-blue-500'>Remove</span>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='flex items-center justify-between font-semibold'>
                <span className=''>Subtotal</span>
                <span className=''>49</span>
            </div>
            <p className='flex justify-between text-sm mb-4 mt-2'>
                loreum ispum dolor ist amet cos
            </p>
            <div className='flex justify-between  text-sm '>
                <button className='rounded-md py-3 px-4 ring-gray-300 ring-1'>View Cart</button>
                <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
            </div>
        </div>
        </>
        ) : (
            <div className=''>Cart is Empty</div>
        )
      }
    </div>
  )
}

export default CartModal
