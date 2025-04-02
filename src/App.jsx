import React, { useState } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/placeorder/Placeorder'
import Footer from './Footer/Footer'
// import Loginpopup from './Loginpopup/Loginpopu'



const App = () => {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    <title>Food app</title>
    {/* {showLogin?<Loginpopup/>:<></>} */}
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
      </div>
          <Footer/>
          
          </>
  )
}

export default App