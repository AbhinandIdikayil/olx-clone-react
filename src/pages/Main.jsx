import React from 'react'
import Categories from '../components/Categories'
import r15Logo from '/R15V3.jpg'
import { SlHeart } from 'react-icons/sl'

function Main() {
    return (
        <div className='relative top-16 left-0 bg-white h-screen'>
            <Categories />
            {/* product listing */}
            
            <div class="container px-3 sm:mx-auto flex-col items-center justify-center mt-4 pb-2">
            <h1 className='text-zinc-950 text-sm sm:text-3xl font-semibold py-2'>Fresh recommendations</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-3">
                    <div style={{ border: '0.5px solid black', opacity: '0.5' }} className="relative rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
                        <div className='w-full h-2/3 sm:h-3/4'>
                            <img className='w-full h-full object-cover' src={r15Logo} alt="" />
                        </div>
                        <h3 className='text-black text-lg font-bold'>$5000</h3>
                        <h3 className='text-black text-sm font-bold'>$5000</h3>
                        <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                            <span>city,state</span>
                            <span>date </span>
                        </div>
                        <button className='absolute top-1 right-1 rounded-3xl flex justify-center items-center text-zinc-950 bg-white' style={{width:'40px',height:'40px'}}>
                            <SlHeart size={25} />
                        </button>
                    </div>
                    <div style={{ border: '0.5px solid black', opacity: '0.5' }} className="rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
                        <div className='w-full h-2/3 sm:h-3/4'>
                            <img className='w-full h-full object-cover' src={r15Logo} alt="" />
                        </div>
                        <h3 className='text-black text-lg font-bold'>$5000</h3>
                        <h3 className='text-black text-sm font-bold'>$5000</h3>
                        <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                            <span>city,state</span>
                            <span>date </span>
                        </div>

                    </div>
                    <div style={{ border: '0.5px solid black', opacity: '0.5' }} className="rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
                        <div className='w-full h-2/3 sm:h-3/4'>
                            <img className='w-full h-full object-cover' src={r15Logo} alt="" />
                        </div>
                        <h3 className='text-black text-lg font-bold'>$5000</h3>
                        <h3 className='text-black text-sm font-bold'>$5000</h3>
                        <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                            <span>city,state</span>
                            <span>date </span>
                        </div>

                    </div>
                    <div style={{ border: '0.5px solid black', opacity: '0.5' }} className="rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
                        <div className='w-full h-2/3 sm:h-3/4'>
                            <img className='w-full h-full object-cover' src={r15Logo} alt="" />
                        </div>
                        <h3 className='text-black text-lg font-bold'>$5000</h3>
                        <h3 className='text-black text-sm font-bold'>$5000</h3>
                        <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                            <span>city,state</span>
                            <span>date </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main