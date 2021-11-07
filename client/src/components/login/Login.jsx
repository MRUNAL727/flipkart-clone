import { Dialog, DialogContent, makeStyles, Box, TextField} from '@material-ui/core';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { authenticateSignup, authenticateLogin } from '../../services/api';


const useStyle = makeStyles({
  component: {
    // height: '70vh',
    width: '90vh',
  },
  image: {
    backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
    height: '70vh',
    backgroundRepeat: 'no-repeat',
    background: '#2874f0',
    width: '40%',
    backgroundPosition: 'center 85%',
    padding: '35px 45px',
    '& > *' :{
        color: '#fff',
        fontWeight: 600
    }
  },

  login:{
    padding:'25px 35px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    ' & > * ':{
      marginTop: 20
    }
  },

  text:{
    color: '#878787',
    fontSize:12

  },
  loginBtn:{
    color: '#fff',
    backgroundColor: '#FB641B'
  },
  createText:{
    cursor: 'pointer'
  }
});
export default function Login({open, setOpen, setAccount}){
    const classes = useStyle();
    
    const [account, toggleAccount] = useState('login');
       
    const [error, setError] = useState(false);
    const [signup, setSignup]= useState({firstname: '',
        lastname: '',
        username: '',
        phone: '',
        email: '',
        password: ''});

        
    const [login, setLogin] = useState({
      username: '',
      password: '',
    });

    const toggleUserAccount = () =>{
      toggleAccount('signup');
    }

    const handleClose=()=> {
        setOpen(false);
        toggleAccount('login');
       
    }

    const signupUser = async()=>{
      let response = await authenticateSignup(signup);
      if(!response) return;
      setAccount(signup.username);
      handleClose();
 
    }
    const loginUser = async () => {
      let response = await authenticateLogin(login);
      if (!response){
        setError(true)
      }else{
      setAccount(login.username);
      handleClose();

      } 
    };

    const handleChange=(event)=>{

      setSignup({...signup, [event.target.name]: event.target.value})
        console.log(signup);
    }
  
    const onValueChange=(event)=>{
      setLogin({...login, [event.target.name]: event.target.value})
    }

    return (
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent className={classes.component}>
            <Box display="flex">
              <Box className={classes.image}>
                <Typography variant="h4">Login</Typography>
                <Typography>Get access to your orders</Typography>
              </Box>
              {account === 'login' ? (
                <Box className={classes.login}>
                  <TextField
                    label="Enter email/mobile number"
                    name="username"
                    onChange={onValueChange}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    onChange={onValueChange}
                  />
                  {  error &&
                  <Typography style={{color:'red'}}>Invalid username or password</Typography>
                  }
                  <Typography className={classes.text}>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </Typography>
                  <Button className={classes.loginBtn} onClick={loginUser}>
                    Login
                  </Button>
                  <Typography style={{ textAlign: 'center' }}>OR</Typography>
                  <Button variant="contained" className={classes.requestBtn}>
                    Request OTP
                  </Button>
                  <Typography
                    className={classes.createText}
                    onClick={() => toggleUserAccount()}
                  >
                    New to flipkart?
                  </Typography>
                </Box>
              ) : (
                <Box className={classes.login}>
                  <TextField
                    onChange={handleChange}
                    label="First name"
                    name="firstname"
                  />
                  <Typography>{signup.firstname}</Typography>
                  <TextField
                    onChange={handleChange}
                    label="Last name"
                    name="lastname"
                  />
                  <TextField
                    onChange={handleChange}
                    label="User name"
                    name="username"
                  />
                  <TextField
                    onChange={handleChange}
                    label="Email"
                    name="email"
                  />
                  <TextField
                    onChange={handleChange}
                    label="Password"
                    name="password"
                  />
                  <TextField
                    onChange={handleChange}
                    label="Phone"
                    name="phone"
                  />

                  <Button className={classes.loginBtn} onClick={signupUser}>
                    Sign up
                  </Button>
                </Box>
              )}
            </Box>
          </DialogContent>
        </Dialog>
      </>
    );
}