import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { app, auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import Sell from './pages/Sell'

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState('')


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid
        setUser(currentUser)
      }
    })
  }), []


  return (
    <UserContext.Provider value={{user,setUser}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Main />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='sell' element={<Sell />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
