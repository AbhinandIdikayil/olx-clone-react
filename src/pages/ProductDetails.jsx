import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../context/PostContext'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

function ProductDetails() {
    const { postDetails } = useContext(PostContext);
    const [userDetails, setUserDetails] = useState({})

    const getUser = async () => {
        const q = query(collection(db, 'users'), where('id', '==', postDetails?.userId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            setUserDetails(doc.data())
        })
    }
    console.log(userDetails)
    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className='relative top-16 left-0 container mx-auto h-screen bg-gray'>

            <img className='p-5 mx-auto object-cover h-80' src={postDetails.url} alt="" />
            <div className='grid grid-cols-5 gap-5 text-black'>

                <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6 text-black'>

                    <h1 className='text-4xl font-bold'>{postDetails.name}</h1>
                    <h2>{postDetails.category}</h2>
                    <p>{postDetails.location}</p>
                    <p>{postDetails.createdAt}</p>
                </div>
                <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6'>
                    <p className='text-xl underline mb-1'>Seller Details:</p>
                    <h1 className='text-lg'>Seller name : {userDetails.username}</h1>
                    <h1>Phone : {userDetails.phone}</h1>
                    <p>Seller ID : {userDetails.uid}</p>
                </div>
                <div className='col-span-1 p-5 bg-gray-50 rounded-lg my-6' >
                    <h1 className='text-4xl font-bold text-center py-5'>₹ {postDetails.price}</h1>
                    <button className='bg-green-950 text-white w-full rounded-lg font-semibold py-3'>Buy Product</button>
                </div>

            </div>



        </div>
    )
}

export default ProductDetails