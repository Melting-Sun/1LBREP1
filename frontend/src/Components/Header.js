import React, { useState } from 'react'
import { Link , useNavigate} from "react-router-dom";

//MUI imports
import { Button , Typography , Grid, CssBaseline, AppBar, Toolbar} from '@mui/material';
import { width } from '@mui/system';

//Assets
import CustomCard from './CustomCard';
import city from'./Assets/city.jpg'



function Header() {
    const navigate = useNavigate();
  return (
    <AppBar position="static" style={{backgroundColor: '#293241'}}>
        <Toolbar> 
          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
            <Button color="inherit" onClick={() => navigate('/listings')} style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography> </Button>
            <Button color="inherit" style={{marginLeft: '2rem'}}><Typography variant='h6'>Agencies</Typography> </Button>
          </div>
          <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <Button style={{backgroundColor: '#98c1d9', color: 'white', width:'15rem', fontSize: '1.1rem', marginRight: '1rem'}}>Add Property</Button>
            <Button onClick={() => navigate('/login')} style={{backgroundColor: '#e0fbfc', color: 'black', width:'15rem', fontSize: '1.1rem', marginLeft: '1rem'}}>Login</Button>
          </div>
          
          
          
        </Toolbar>
      </AppBar>
  )
}

export default Header