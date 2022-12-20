import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  Axios from 'axios';


// MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader,
        CardMedia, CardContent, CircularProgress,
        TextField} from "@mui/material";




function Register() {
  const navigate = useNavigate()
  
  const [sendRequest, setSendRequest] = useState(false)
  const [usernameValue, setUsernameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [password2Value, setPassword2Value] = useState('')





  
  function FormSubmit(e){
    e.preventDefault()
    console.log("the form has been submited")
    setSendRequest(!sendRequest)
  }




  useEffect(() => {
    if(sendRequest){
        const source = Axios.CancelToken.source()
        async function SignUp(){
          try{
            const response = await Axios.post('http://localhost:8000/api-auth-djoser/users/',
             {
                username: usernameValue,
                email: 'testinguser@gmail.com',
                password: 'mypass123',
                re_password: 'mypass123',
             },
             {
                cancelToken: source.token,
            })
      
            console.log(response)
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
  }, [sendRequest])






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
                value={usernameValue}
                onChange={(e)=> setUsernameValue(e.target.value)} 
                />
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={emailValue}
                onChange={(e)=> setEmailValue(e.target.value)} 
                />
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="password" label="Password" variant="outlined" fullWidth type='password'/>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="password2" label="Confirm Password" variant="outlined" fullWidth type='password'/>
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