import React, { useState } from 'react'
import { Link } from "react-router-dom";

//MUI imports 
import { Button , Typography , Grid, CssBaseline, AppBar, Toolbar} from '@mui/material';
import { width } from '@mui/system';

//Components 

import CustomCard from './CustomCard';
import Header from './Header';
// Assets
import city from'./Assets/city.jpg'



function Home() {
  const [btnColor, setBtnColor] = useState("error");
  return(
<>   
      <div style={{position: 'relative'}}>
        <img src={city} style={{width: '100%', height: '100%'}}/>
        <div style={{position: 'absolute', zIndex: '100', top: '100px', left: '20px', textAlign: 'center'}}>
          <Typography variant='h1' style={{color: '#b0b3b8', fontWeight: 'bolder'}}>Find Your <span style={{color: "#dad5cf"}}>Next Property</span> On LBREP Website</Typography>
          <Button variant='contained' style={{fontSize: '3.5rem', borderRadius: '15px', backgroundColor: '#989898', marginTop: '2rem', boxShadow: '3px 3px 3px gray'}}>See All Properties</Button>
        </div>
      </div>
      
</> 
  )   
}

export default Home