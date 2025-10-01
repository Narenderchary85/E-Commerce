import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between '>
      <div className='flex gap-6 flex-wrap'>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input type="text" name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Size</option>
                <option value="Size">Size</option>
            </select>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Type</option>
                <option value="Size">Type</option>
            </select>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Color</option>
                <option value="color">Color</option>
            </select>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Category</option>
                <option value="new">New Arrival</option>
                <option value="popular">Popular</option>
            </select>
            <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">All Filters</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
      </div>
      <div className=''>
      <select name="type" className='py-2 px-4 rounded-2xl text-xs font-median bg-[#EBEDED]' id="">
                <option value="">Sort By</option>
                <option value="physical">Price (low to high)</option>
                <option value="digital">Newest</option>
                <option value="digital">Oldest</option>
      </select>
      </div>
    </div>
  )
}

export default Filter
