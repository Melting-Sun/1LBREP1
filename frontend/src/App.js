import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import React from 'react';

//MUI imports
import { StyledEngineProvider } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';



//Components
import Home from './Components/Home';
import Login from './Components/Login';
import Listing from './Components/Listing';
import Header from './Components/Header';
import Testing from './Components/Testing';
import Register from './Components/Register';



function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <CssBaseline/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/listings' element={<Listing/>}/> 
          <Route path='/Testing' element={<Testing/>}/> 
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App;
