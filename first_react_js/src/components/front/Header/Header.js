import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import reactLogo from './img/Logo.jpg';
import "./Header.css"
import SearchBar from '../../SearcBar/SearchBar';


const header = ({cartItems}) => {
  return (
    <> 
    
    <header className='header'>
      <div>
        <h1>
          <img style={{width: 250, height:50}} src={reactLogo} alt='react logo'></img>
          <Link to="/" className='Logo'></Link>
        </h1>
      </div>
      <div className='header-links'>
          <ul>
          <li>
            {/* <SearchBar/> */}
          </li>
        </ul> 
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
              <ShoppingCartSharpIcon/>
              <span className='cart-length'>
                {cartItems.length === 0 ? " " : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
        
      </div>
    </header></>
  )
}

export default header
