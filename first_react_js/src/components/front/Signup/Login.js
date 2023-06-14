import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import './Signup.js'
import { Link } from 'react-router-dom';
// import Signup from './Signup.js';

const Login = (  ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
<Container>
      <Box component="form" >
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Email: <TextField fullWidth
          required
          id="outlined-required"
          type="email"
          label="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          name= "email"
          value={email}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'> Password:
        <TextField fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          name= "password"
          value={password}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='buttonsAlignment'>
        <Button className='buttonSubmit1' type='submit'>Login</Button>
        <Button className='buttonSubmit2'  ><Link to="/signup">Don't have an account? Click here to register!</Link></Button>
        </Grid>
      </Grid>
      </Box>
    </Container>
  )
}

export default Login
