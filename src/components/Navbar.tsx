import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import Navicons from './Navicons'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        <div className='h-full flex items-center justify-between md:hidden'>
            <Link href="/">
                <div className='text-2xl tracking-wide'>OAMA</div>
            </Link>
            <Menu/>
        </div>
        <div className='hidden md:flex items-center h-full justify-center gap-8 h-full'>
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                <Link href="/" className=' flex justify-center items-center gap-3'>
                <Image src="/logo.png" alt="" width={24} height={24} className=''/>
                <div className='text-2xl tracking-wide gap-3 '>LAMA</div>
                </Link>
                <div className='hiden xl:flex gap-4 text-lg text-[500]'>
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart</Link>
                </div>
            </div>
            <div className='w-2/3 flex items-center justify-center gap-8 xl:w-1/2'>
                <SearchBar/>
                <Navicons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
