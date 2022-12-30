import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  Axios from 'axios';
import { useImmerReducer } from 'use-immer'


// MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader,
        CardMedia, CardContent, CircularProgress,
        TextField} from "@mui/material";




function Register() {
  const navigate = useNavigate()


  const initialState = {
    usernameValue: '',
    emailValue: '',
    passwordValue: '',
    password2Value: '',
    sendRequest: 0,
  }
  
  function ReducerFunction(draft, action){
    switch(action.type){
      case 'catchUsernameChange':
        draft.usernameValue = action.usernameChosen
        break
      case 'catchEmailChange':
        draft.emailValue = action.emailChosen
        break   
      case 'catchPasswordChange':
        draft.passwordValue = action.passwordChosen
        break 
      case 'catchPassword2Change':
        draft.password2Value = action.password2Chosen
        break    
      case 'changeSendRequest':
        draft.sendRequest = draft.sendRequest + 1
        break
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)













  




  
  function FormSubmit(e){
    e.preventDefault()
    console.log("the form has been submited")
    dispatch({type: 'changeSendRequest'})
  }




  useEffect(() => {
    if(state.sendRequest){
        const source = Axios.CancelToken.source()
        async function SignUp(){
          try{
            const response = await Axios.post('http://localhost:8000/api-auth-djoser/users/',
             {
                username: state.usernameValue,
                email: state.emailValue,
                password: state.passwordValue,
                re_password: state.password2Value,
             },
             {
                cancelToken: source.token,
            })
      
            console.log(response)
            navigate('/')
            }
            catch(error){
              console.log(error.response)
            }
          
        }
        SignUp()
        return ()=>{
          source.cancel()
        }
    }
  }, [state.sendRequest])






  return (
    <div style={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3rem',

    }}>
        <form onSubmit={FormSubmit}>
            <Grid item container justifyContent= 'center'>
                <Typography variant='h4'>Create An Account</Typography>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={state.usernameValue}
                onChange={(e)=> dispatch({type: 'catchUsernameChange', usernameChosen: e.target.value})} 
                />
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={state.emailValue}
                onChange={(e)=> dispatch({type: 'catchEmailChange', emailChosen: e.target.value})} 
                //
                />
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                type='password'
                value={state.passwordValue}
                onChange={(e)=> dispatch({type: 'catchPasswordChange', passwordChosen: e.target.value})} 
                />
                
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField
                id="password2"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type='password'
                value={state.password2Value}
                onChange={(e)=> dispatch({type: 'catchPassword2Change', password2Chosen: e.target.value})} 
                />
            </Grid>

            <Grid item container xs={8} style={{ margin: '1rem', marginLeft: 'auto', marginRight: 'auto',
            }}>
               <Button variant='contained' fullWidth type='submit'>
                    Sign Up
                </Button>
            </Grid>

        </form>

        <Grid item container justifyContent= 'center' style={{ margin: '1rem' }}>
                <Typography variant='small'>Already Have An Account? <span onClick={()=>navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>SIGN IN</span></Typography>
        </Grid>

    </div>
  )
}

export default Register