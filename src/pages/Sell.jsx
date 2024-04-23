import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'

import { UserContext } from '../App'
import { db } from '../firebase/config'


function Sell() {

  const navigate = useNavigate()

  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState(null)

  const { user } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user)
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + image.name);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    const date = new Date();

    // creating document
    const docRef = await addDoc(collection(db, 'products'), {
      productName,
      category,
      price,
      location,
      url,
      userId: user.uid,
      createdAt: date.toDateString()
    })
    if (docRef) {
      navigate('/');
    }
  }


  const fileInputRef = useRef(null)

  return (
    <div className='relative top-16 bg-gray-100 grid grid-cols-12 pb-5'>

      <span className='col-span-4'></span>
      <div className='col-span-4 m-10 bg-white rounded-xl'>

        <div className='mx-auto text-center'>
          <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

          <h1 className='font-bold text-xl mt-4 text-black'>Sell your Product</h1>

          <input onChange={(e) => setProductName(e.target.value)} value={productName} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-8 border-black bg-white text-black' type="text" placeholder='Product Name' />
          <input onChange={(e) => setCategory(e.target.value)} value={category} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black bg-white text-black' type="text" placeholder='Category' />
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black bg-white text-black' type="text" placeholder='Price' />
          <input onChange={(e) => setLocation(e.target.value)} value={location} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black bg-white text-black' type="text" placeholder='Location' />

          {
            image !== null ?
              <img className='py-2 px-2 border-2 w-3/4 rounded-lg mx-auto'
                src={image !== null ? URL.createObjectURL(image) : null}
                alt="Product image" />
              : null
          }
          <div>
            <label className='text-start ms-12 rounded-lg mt-5 block text-black' htmlFor="">Choose a Picture</label>
            <input onChange={(e) => setImage(e.target.files[0])} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-1 border-black' type="file" placeholder='Choose' />
          </div>


          <button onClick={handleSubmit} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10 mb-16'>Create</button>


        </div>


      </div>
      <span className='col-span-4'></span>


    </div>

  )
}

export default Sell