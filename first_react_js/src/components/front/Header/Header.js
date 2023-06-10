import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const header = ({cartItems}) => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to="/" className='Logo'>Jewelry Store</Link>
        </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            {/* add icons for the cart */}
            <Link to="/cart" className='cart'>
              Cart
              <span className='cart-length'>
                {cartItems.length === 0 ? " " : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default header
