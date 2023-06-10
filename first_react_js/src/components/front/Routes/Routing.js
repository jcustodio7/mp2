import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Products from '../Products/Products';
import About from '../About/About';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import Login from '../Signup/Login';
import Signup from '../Signup/Signup';
import Proceed from '../Cart/Proceed'

const Routing = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, }) => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/product" element={<Products  productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/checkout" element={<Proceed handleCartClearance={handleCartClearance} cartItems={cartItems}/>}/>
          <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
      </Routes>
    </div>
  )
}

export default Routing
