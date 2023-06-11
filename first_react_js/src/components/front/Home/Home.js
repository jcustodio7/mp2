import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Banner from './images/bg.jpg';

const Home = () => {
  return (
    <div className='Home' style={{backgroundImage:`url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>Luxe Bijoux</h1>
        <p>Where elegance meets affordability</p>
        <Link to="/product">
            <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
