import React from 'react'
import Categories from '../components/Categories'
import r15Logo from '/R15V3.jpg'

function Main() {
    return (
        <div className='relative top-16 left-0 bg-white'>
            <Categories />


            <div class="container px-3 sm:mx-auto flex items-center justify-center mt-4 pb-2">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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