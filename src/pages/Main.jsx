import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import r15Logo from '/R15V3.jpg'
import { SlHeart } from 'react-icons/sl'
import Card from '../components/Card'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

function Main() {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const allPosts = querySnapshot.docs.map((product) => {
            return {
                ...product.data(),
                id: product.id
            }
        })
        setProducts(allPosts)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{zIndex:888}} className='relative top-16 left-0 h-screen w-full bg-gray-50'>
            <Categories />
            {/* product listing */}
            
            <div style={{zIndex:999}} class="container px-3 sm:mx-auto flex-col items-center justify-center mt-4 pb-2">
                <h1 className='text-zinc-950 text-sm sm:text-3xl font-semibold py-2'>Fresh recommendations</h1>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-3">
                    {
                        products.length < 1 ? (
                            <div style={{ border: '0.5px solid black', zIndex:999}} className="relative rounded h-[200px] w-fit sm:h-64 sm:w-72 p-2">
                                <div className='w-full h-2/3 sm:h-3/4'>
                                    <img className='w-full h-full object-cover' src={r15Logo} alt="" />
                                </div>
                                <h3 className='text-black text-lg font-bold'>$5000</h3>
                                <h3 className='text-black text-sm font-bold'>$5000</h3>
                                <div className='text-black  w-full flex justify-between items-center uppercase font-light text-xs'>
                                    <span>city,state</span>
                                    <span>date </span>
                                </div>
                                <button className='absolute top-1 right-1 rounded-3xl flex justify-center items-center text-zinc-950 bg-white' style={{ width: '40px', height: '40px' }}>
                                    <SlHeart size={25} />
                                </button>
                            </div>
                        ) : (
                            products.map((prod) => {
                                return <Card key={prod.id} data={prod} />
                            })

                        )
                    }




                </div>
            </div>

        </div>
    )
}

export default Main