import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 border-gray-300 md:min-h-screen'>
            <form className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap font-semibold text-amber-950'>Search Term:</label>
                    <input 
                    type='text'
                    id='searchTerm'
                    placeholder='Search...'
                    className='bg-white w-full p-3 rounded-lg'></input>
                </div>
                <div className='flex gap-2 items-center flex-wrap'>
                    <label className='font-semibold text-amber-950'>Type:</label>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='all'
                        className='w-5'/>
                        <span>Rent & Offer</span>
                    </div>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='rent'
                        className='w-5'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='sale'
                        className='w-5'/>
                        <span>Sale</span>
                    </div>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='offer'
                        className='w-5'/>
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex gap-2 items-center flex-wrap'>
                    <label className='font-semibold text-amber-950'>Amenities:</label>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='parking'
                        className='w-5'/>
                        <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                        <input
                        type='checkbox'
                        id='furnished'
                        className='w-5'/>
                        <span>Furnished</span>
                    </div>
                </div>
                <div className='flex gap-2 items-center flex-wrap'>
                        <label className='font-semibold text-amber-950'>Sort:</label>
                        <select id='sort_order' className='rounded-lg bg-white p-3'>
                            <option>Price high to low</option>
                            <option>Price low to high</option>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                </div>
                <button className='bg-amber-950 uppercase p-3 text-white hover:opacity-90 rounded-lg'>Search</button>
            </form>
        </div>
        <div className=''>
            <h1 
            className='text-3xl border-b-2 md:min-w-screen border-gray-300 p-3 font-semibold text-amber-900 mt-5'>Listing Results:</h1>
        </div>
    </div>
  )
}
