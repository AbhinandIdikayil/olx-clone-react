import React from 'react'
import {IoIosArrowDown, IoMdSad} from 'react-icons/io' 

function Categories() {
  return (
    <div className='w-full bg-white p-2 flex items-center gap-4 pl-5 shadow-lg'>
        <div className='text-black font-semibold flex items-center pl-8'>
            <span>
             
            ALL CATEGORIES
            </span>
            <IoIosArrowDown />
        </div>
        <div className='hidden sm:block'>
            <ul className='text-gray-500 font-medium flex items-center text-sm gap-2 px-2'>
                <li>Cars</li>
                <li>Motorcycles</li>
                <li>Mobile Phones</li>
                <li>For Sale: Houses & Apartments</li>
                <li>Scooters</li>
                <li>Commercial & Other Vehicles</li>
                <li>For Rent: Houses & Apartments</li>
            </ul>
        </div>
    </div>
  )
}

export default Categories