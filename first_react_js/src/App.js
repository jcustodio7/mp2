import React, { useState } from 'react';
import data from "./components/back/Data/data";
import Header from "./components/front/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from './components/front/Routes/Routing';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
      if(ProductExists){
        setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExists, quantity: ProductExists.quantity + 1}: item));
      } else {setCartItems([...cartItems, {...product, quantity: 1 }])}

      console.log(cartItems);
  }

  const handleRemoveProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExists, quantity: ProductExists.quantity - 1}: item))}
  }

  const handleCartClearance = () => {
    setCartItems([]);
  }
  return (
    <div>
      <Router> 
        <Header cartItems={cartItems} />
        <Routing productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
      </Router>
    </div>
  )
}

export default App
