import React, { useState, useContext } from 'react'
import { Link , useNavigate} from "react-router-dom";

//MUI imports
import { Button , Typography , Grid, CssBaseline, AppBar, Toolbar, Menu, MenuItem} from '@mui/material';
import { width } from '@mui/system';

//Assets
import CustomCard from './CustomCard';
import city from'./Assets/city.jpg'

//Contexts
import StateContext from '../Contexts/StateContext';




function Header() {
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext)
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  


    function HandleProfile(){
      setAnchorEl(null);
      navigate('/profile')
    }


  
  
    return (
    <AppBar position="static" style={{backgroundColor: '#293241'}}>
        <Toolbar> 
          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>LBREP</Typography></Button>
          </div>
          <div>
            <Button color="inherit" onClick={() => navigate('/listings')} style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography> </Button>
            
          </div>
          <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
          
            <Button  onClick={() => navigate('/addproperty')}  style={{backgroundColor: '#98c1d9', color: 'white', width:'15rem', fontSize: '1.1rem', marginRight: '1rem'}}>Add Property</Button>
            {/* <Button  onClick={() => navigate('/profile')}  style={{backgroundColor: '#e0fbfc', color: 'black', width:'15rem', fontSize: '1.1rem', marginRight: '1rem'}}>Profile</Button> */}
           

    
         {GlobalState.userIsLogged  ? (
         <Button 
         onClick={handleClick}
      //   onClick={() => navigate('/login')} 
         style={{backgroundColor: '#e0fbfc', color: 'black', width:'15rem', fontSize: '1.1rem', marginLeft: '1rem'
        }}>
          {GlobalState.userUsername}
          </Button>
         ) : <Button onClick={() => navigate('/login')} style={{backgroundColor: '#e0fbfc', color: 'black', width:'15rem', fontSize: '1.1rem', marginLeft: '1rem'}}>
          Login
          </Button>}
          {/* <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
          <Button  onClick={() => navigate('/profile')}  style={{backgroundColor: '#e0fbfc', color: 'black', width:'15rem', fontSize: '1.1rem', marginRight: '1rem'}}>Profile</Button>
          </div> */}
          



        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={HandleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>


  
           
          </div>
          
          
          
        </Toolbar>
      </AppBar>
  )
}

export default Header