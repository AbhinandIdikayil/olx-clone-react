import React from 'react'
import r15Logo from '/R15V3.jpg'
import { SlHeart } from 'react-icons/sl'

function Card({ data }) {

    const { productName, category, location, price, url, createdAt } = data
    return (
        <div style={{ border: '0.5px solid black' , zIndex:999}} className="relative rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
            <div className='w-full h-2/3 sm:h-3/4'>
                <img className='w-full h-full object-cover' src={url} alt="" />
            </div>
            <h3 className='text-black text-lg font-bold'> ₹ {price} </h3>
            <h3 className='text-black text-sm font-bold'> {productName + ' - ' + category} </h3>
            <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                <span> {location} </span>
                <span> {createdAt} </span>
            </div>
            <button className='absolute top-1 right-1 rounded-3xl flex justify-center items-center text-zinc-950 bg-white' style={{ width: '40px', height: '40px' }}>
                <SlHeart size={25} />
            </button>
        </div>
    )
}

export default Card