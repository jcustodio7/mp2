import React from 'react'
import './Proceed.css';
import { Alert, Box, Button, Container, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { formatMoney } from '../../../utility/helper'


const Proceed = ({totalPrice, handleCartClearance }) => {

  
  const [checkOut, setcheckOut] = useState ({
    fullName: "",
    contactNumber: "",
    contactNumber1: "",
    addressLocation: "",
    radioButtonsGroup: "",
  })

  const handleOnChange = (event) => {
  console.log(event.target.name, event.target.value);
  setcheckOut({...checkOut, [event.target.name]: event.target.value});
  };

  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    if(checkOut.fullName === ""){
      setErrorMessage("Full Name is required")
      setHasError(true)
  }
    else if (checkOut.contactNumber === ""){
      setErrorMessage("Contact Number is required")
      setHasError(true)
  }
    else if (checkOut.contactNumber1 === ""){
      setErrorMessage("Alternative Number is required")
      setHasError(true)
  }
    else if (checkOut.addressLocation === ""){
      setErrorMessage("Address is required")
      setHasError(true)
  }
    else if (checkOut.radioButtonsGroup === ""){
      setErrorMessage("Mode of Payment is required")
      setHasError(true)
  } 
    else {setHasError(false);
      handleCartClearance();
      setcheckOut({
        fullName: "",
        contactNumber: "",
        contactNumber1: "",
        addressLocation: "",
        radioButtonsGroup: ""
      });
      toast.success('Your order has been placed. Thank you for purchasing', {
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
}

  return (
    <Container>
    <Box component="form" >
    {hasError ? (<Alert severity="warning">{errorMessage}</Alert>): (" ")}
    <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Name of the Recipient: <TextField fullWidth
          required
          id="outlined-required"
          label="Full Name"
          name= "fullName"
          value={checkOut.fullName}
          onChange={(event) => handleOnChange(event)}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Number: <TextField fullWidth
          required
          id="outlined-number"
          type="number"
          label="Enter mobile number"
          name= "contactNumber"
          value={checkOut.contactNumber}
          onChange={(event) => handleOnChange(event)}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Alternative Number: <TextField fullWidth
          required
          id="outlined-number"
          type="number"
          label="Enter mobile number"
          name= "contactNumber1"
          value={checkOut.contactNumber1}
          onChange={(event) => handleOnChange(event)}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Shipping Address:<TextField
          fullWidth
          id="outlined-multiline-static"
          required
          label="Address"
          multiline
          rows={4}
          name= "addressLocation"
          value={checkOut.addressLocation}
          onChange={(event) => handleOnChange(event)}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>Mode of Payment:
        <div>
        <FormControl>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radioButtonsGroup"
        onChange={(event) => handleOnChange(event)}
        value={checkOut.radioButtonsGroup}
        >
        <FormControlLabel value="female" control={<Radio />} label="COD/Cash on delivery" />
        <FormControlLabel value="male" control={<Radio />} label="Gcash" />
        <FormControlLabel value="other" control={<Radio />} label="Bank Transfer (BDO)" />
      </RadioGroup>
      </FormControl>
      </div>
        </Grid>
      </Grid>
    <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>
            {/* Total amount to pay:  { formatMoney(totalPrice) } */}
        </Grid>
    </Grid>
    <Grid container spacing={0} className = 'formAlign'>
      <Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Button className='buttonSubmit' onClick={(event) => {handleSubmit(event);}} ><Link className='buttonCheckout'>Checkout</Link></Button>
      </Grid>
    </Grid>
    </Box>
  </Container>
  )
}

export default Proceed
