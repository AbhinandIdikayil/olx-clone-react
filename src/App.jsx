import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Categories from './components/Categories'
import Main from './pages/Main'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Main /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
