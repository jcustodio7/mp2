import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import Banner from './images/diamond4.jpg';

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
      <br/>
      <br/>
      <div className='headerContainer1'>
          <h3>Reach us</h3>
          <p><EmailIcon></EmailIcon>  info@luxebijoux.com</p>
          <p><AddIcCallIcon></AddIcCallIcon> +63 945 2044 574</p>
          <FacebookTwoToneIcon></FacebookTwoToneIcon> <InstagramIcon></InstagramIcon> <GitHubIcon></GitHubIcon>
      <div>
          <h3>Come visit us</h3>
          <p>Capitol Hills, Quezon City, Metro Manila, Philippines, 1126</p>
          <p>Monday - Saturday</p>
          <p>9AM - 6PM</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
