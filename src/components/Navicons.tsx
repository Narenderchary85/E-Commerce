'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const Navicons = () => {
    const [isProfileOpen,setIsProfileOpen]=useState(false);
    const [isCartOpen,setIsCartOpen]=useState(false);
    const isLoggedIn= false;
    const router=useRouter()

    const handleProfile=()=>{
        if(isLoggedIn){
            router.push("/login")
        }
        setIsProfileOpen((prev)=> !prev)
    }

  return (
    <div className='flex items-center justify-center xl:gap-6'>
      <Image src="/profile.png" alt='' width={22} height={22} className='cursor-poniter' onClick={handleProfile}/>
      {
        isProfileOpen && (
            <div className='absolute p-4 rounded-md top-14  text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                <Link href="/">Profile</Link>
                <div className='mt-2 cursor-pointer'>Logout</div>
                
            </div>
        )
      }
      <Image src="/notification.png" alt='' width={22} height={22} className='cursor-poniter'/>
      <div className='relative cursor-pointer'>
      <Image src="/cart.png" alt='' width={22} height={22} className='cursor-poniter relative' onClick={()=>setIsCartOpen((prev)=> !prev)}/>
      <div className='absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-sm  flex justify-center items-center text-white'>1</div>
      </div>
      {
          isCartOpen && (
              <CartModal/>
            )
        }
    </div>
  )
}

export default Navicons
