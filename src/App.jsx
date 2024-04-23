import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { app, auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import Sell from './pages/Sell'
import { PostContext } from './context/PostContext'
import ProductDetails from './pages/ProductDetails'

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);
  const [postDetails, setPostDetails] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid
        setUser(currentUser)
      }
    })
  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }} >
      <PostContext.Provider value={{postDetails, setPostDetails}} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<Main />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='sell' element={<Sell />} />
              <Route path='productDetails' element={<ProductDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </UserContext.Provider>
  )
}

export default App
