import React from 'react'
import { useNavigate } from 'react-router-dom';

// MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader,
        CardMedia, CardContent, CircularProgress,
        TextField} from "@mui/material";




function Register() {

  const navigate = useNavigate()


  return (
    <div style={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3rem',

    }}>
        <form>
            <Grid item container justifyContent= 'center'>
                <Typography variant='h4'>Create An Account</Typography>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="username" label="Username" variant="outlined" fullWidth/>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="email" label="Email" variant="outlined" fullWidth/>
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