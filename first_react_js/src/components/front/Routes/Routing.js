import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Products from '../Products/Products';
import About from '../About/About';
import Cart from '../Cart/Cart';

const Routing = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Products  productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
      </Routes>
    </div>
  )
}

export default Routing
