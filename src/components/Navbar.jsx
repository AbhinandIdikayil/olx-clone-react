import React from 'react'
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import SellButton from '../../assets/SellButton';

function Navbar() {
    return (
        <div style={{ height: '72px' }} className='fixed z-[99] w-full px-5 bg-gray-200 border-b-4 border-white flex items-center justify-between sm:justify-start gap-4 shadow-sm'>
            <div>
                <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </div>
            <div className='hidden sm:block h-2/3 w-1/5 overflow-hidden rounded'>
                <input type="text" className='bg-white h-full w-full rounded text-black font-semibold p-2 border-2 focus:border-red-600  border-black  '/>
            </div>
            <div className='hidden sm:block w-1/2 h-2/3 overflow-hidden bg-yellow-300'>
                <form className='w-full h-full flex rounded overflow-hidden'>
                    <input type="text"
                        className='bg-white h-full w-full  text-black text-lg p-2 border-2 border-black'
                        placeholder='Find cars,Mobiles,Phones and more...'
                    />
                    <IoIosSearch size={30} className='bg-zinc-800 h-auto w-fit' />
                </form>
            </div>
            <div className='w-fit sm:w-1/12  font-semibold text-lg text-black'>
                <div className='flex items-center'>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded uppercase hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">English <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-2 items-center w-fit'>
                <span className='text-xl text-black font-semibold underline'>
                    Login
                </span>
                <button className='h-1/2 px-3 rounded-3xl text-black font-bold border-4 border-r-green-400 border-l-green-400 border-t-blue-600 border-b-yellow-400 bg-zinc-50'>
                    + sell
                </button>
            </div>

        </div>
    )
}

export default Navbar