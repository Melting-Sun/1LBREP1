import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Reac, { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';



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
import AddProperty from './Components/AddProperty';
import Profile from './Components/Profile';



//contexts
import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';




function App() {



    
  
    const initialState = {
      userUsername: localStorage.getItem("theUserUsername"),
      userEmail: localStorage.getItem("theUserEmail"),
      userId: localStorage.getItem("theUserId"),
      userToken: localStorage.getItem("theUserToken"),
      userIsLogged: localStorage.getItem('theUserUsername') ? true : false,
    }
    
    function ReducerFunction(draft, action){
      switch(action.type){
        case 'catchToken':
          draft.userToken = action.tokenValue;
          break
        case 'userSignsIn':
          draft.userUsername = action.usernameInfo;
          draft.userEmail = action.emailInfo;
          draft.userId = action.IdInfo;
          draft.userIsLogged = true;
          break
      }
    } 
  
    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)
    

    useEffect(()=>{
      if (state.userIsLogged){
        localStorage.setItem('theUserUsername', state.userUsername)
        localStorage.setItem('theUserEmail', state.userEmail)
        localStorage.setItem('theUserId', state.userId)
        localStorage.setItem('theUserToken', state.userToken)
      }
    }, [state.userIsLogged])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
          <CssBaseline/>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/addproperty' element={<AddProperty/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/listings' element={<Listing/>}/> 
              <Route path='/Testing' element={<Testing/>}/> 
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )

}
export default App;

