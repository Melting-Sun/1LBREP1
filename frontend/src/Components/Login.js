import React from 'react'
import { useNavigate } from 'react-router-dom';


// MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader,
        CardMedia, CardContent, CircularProgress,
        TextField} from "@mui/material";




function Login() {

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
                <Typography variant='h4'>SIGN IN</Typography>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="username" label="Username" variant="outlined" fullWidth/>
            </Grid>

            <Grid item container style={{ margin: '1rem' }}>
                <TextField id="password" label="Password" variant="outlined" fullWidth type='password'/>
            </Grid>

            <Grid item container xs={8} style={{ margin: '1rem', marginLeft: 'auto', marginRight: 'auto',
            }}>
               <Button variant='contained' fullWidth type='submit'>
                    SIGN IN
                </Button>
            </Grid>

        </form>

        <Grid item container justifyContent= 'center' style={{ margin: '1rem' }}>
        <Typography variant='small'>Don't Have An Account Yet? <span onClick={()=>navigate('/register')} style={{ cursor: 'pointer', color: 'blue' }}>SIGN UP</span></Typography>
        </Grid>

    </div>
  )
}

export default Login