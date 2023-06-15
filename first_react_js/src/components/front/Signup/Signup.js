import * as React from 'react';
import TextField from '@mui/material/TextField';
import "./Signup.css"
import { Alert, Box, Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [signUp, setSignUp] = useState ({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        password1: "",
        password2: "",
    })

    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleOnChange = (event) => {
        console.log(event.target.name, event.target.value);
        setSignUp({...signUp, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(signUp.firstName === ""){
            setErrorMessage("First Name is required")
            setHasError(true)
        }
        else if (signUp.lastName === ""){
            setErrorMessage("Last Name is required")
            setHasError(true)
        }
        else if (signUp.number === ""){
            setErrorMessage("Number is required")
            setHasError(true)
        }
        else if (signUp.email === ""){
            setErrorMessage("Email is required")
            setHasError(true)
        }
        else if (signUp.password1 === ""){
            setErrorMessage("Password is required")
            setHasError(true)
        }
        else if (signUp.password2 === ""){
            setErrorMessage("Password is required")
            setHasError(true)
        }
        else {setHasError(false);
            setSignUp({
            firstName: "",
            lastName: "",
            number: "",
            email: "",
            password1: "",
            password2: ""});
            toast.success('Your account has been created. Please proceed to login.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    

        console.log('Submit', signUp);
    };

  return (
    <Container>
      <Box component="form" >
      {hasError ? (<Alert severity="warning">{errorMessage}</Alert>): (" ")}
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>First Name: <TextField fullWidth
          required
          id="outlined-required"
          label="First Name"
          onChange={(event) => handleOnChange(event)}
          name= "firstName"
          value={signUp.firstName}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Last Name:<TextField fullWidth
          required
          id="outlined-required"
          label="Last Name"
          onChange={(event) => handleOnChange(event)}
          name= "lastName"
          value={signUp.lastName}
        />
        </Grid>     
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Number: <TextField fullWidth
          required
          id="outlined-number"
          type="number"
          label="Enter mobile number"
          onChange={(event) => handleOnChange(event)}
          name= "number"
          value={signUp.number}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Email: <TextField fullWidth
          required
          id="outlined-required"
          type="email"
          label="Enter valid email"
          onChange={(event) => handleOnChange(event)}
          name= "email"
          value={signUp.email}
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
          onChange={(event) => handleOnChange(event)}
          name= "password1"
          value={signUp.password1}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'> Re-enter Password:
        <TextField fullWidth
          required
          id="outlined-password-input"
          label="Re-enter password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => handleOnChange(event)}
          name= "password2"
          value={signUp.password2}
        />
        </Grid>
      </Grid>
      <Grid >
        <Button className='buttonSubmit3' type='submit' onClick={(event) => handleSubmit(event)}>Submit</Button>
        <Button className='buttonSubmit4' ><Link className='buttonSubmitLogin' to="/login">Click here to Login</Link></Button>
        </Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </Box>
    </Container>
  );
}
