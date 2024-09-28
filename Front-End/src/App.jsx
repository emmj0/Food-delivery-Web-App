import React, { useState } from 'react'
import Navbar from './components/Nav/navbar'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeOrder/placeorder'
import Footer from './components/footer/footer'
import Loginpopup from './components/loginpopup/loginpopup'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [loginpop,setshowlogin] = useState(false);
  return (
    <>
    {loginpop?<Loginpopup setshowlogin ={setshowlogin}/>:<></>}
      <div className='app'>
        <Navbar setshowlogin ={setshowlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
