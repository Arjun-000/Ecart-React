import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from "react-router-dom"
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Home from './pages/Home'
import View from './pages/View'
import Pnf from './pages/Pnf'
import { Route, Router } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/:id/view" element={<View/>} />
        <Route path="/*" element={<Pnf/>} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
