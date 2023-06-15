import React from 'react';
import "./About.css"
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{
      my: 15,
      textAlign: 'center',
      p: 2,
      "& h4": {
        fontWeight: "bold",
        my: 2,
        fontSize: '2rem',
      },
      "& p": {
        textAlign: 'center',
      }
    }}>
      <Typography variant='h3'>Our Story</Typography>
      <p>
        Luxe Bijoux individually selects beautiful, rare and responsibly sourced diamonds. Each diamond receives the unique inscription, proof that it has been cared for along its journey. Luxe Bijoux diamonds connect individuals to the wonder of nature, to the past and the future, and symbolise the joy and meaning of their lives and relationships. 
      </p>
      <br />
      <p>
      Our diamonds are elevated in jewellery designs that light up life’s most memorable occasions as well as its everyday moments, igniting a spark in the wearer and encouraging them to live life to their full potential. Our designs are modern, clean, distinctive yet never overly ornate. They are timeless with a twist, and the diamond is the hero of each piece. At the heart of Luxe Bijoux is 'Building Forever', the company's commitment to ensure that every diamond we discover creates a lasting positive impact for the people and places where it is found. 
      </p>
      <h1>Mission</h1>
      <p>
      Our mission is to praise the urban woman and make her stand out by creating handcrafted affordable luxury jewelry that contributes her personal style. We strive to create jewelry that inspires and keeps happy memories alive, whether it's a tiny pendant or a huge diamond ring.
      </p>
      <br />
      <h1>Vision</h1>
      <p>
       Our Vision is to be your top of mind when in need of memorable jewelry and pay tribute to traditional handcraft.
      </p>
      <br />
      <h1>Values</h1>
      <p>
      Our values are to create an inspirational workplace with room for development and change. Nothing is static, everything can happen when being open to changes and let the creativity flow.
      </p>
    </Box>
  );
};

export default About;
