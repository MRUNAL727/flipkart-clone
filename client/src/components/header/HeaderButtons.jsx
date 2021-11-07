import {Box, Button, makeStyles, Badge} from '@material-ui/core'
import { Typography } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import LoginDialog from '../login/Login';
import { useState, useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider.jsx';
import Profile from './Profile.jsx'

const useStyles = makeStyles({
    login:{
      color:'blue',
      backgroundColor: "#fff",
      textTransform: 'none',
      fontWeight: 600,
      padding: '5px 40px',
      borderRadius: 2,
      boxShadow: 'none'
    },

    wrapper:{
        margin: '0 7% 0 auto', 
        display: 'flex',
        fontSize: 13,
        '& > *' :{
            marginRight:50,
          textDecoration: 'none',
          color: '#fff'
        },
          
    },

  

    conatiner:{
        display: 'flex'
    }
        
})




export default function HeaderButtons(){
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const {account, setAccount} = useContext(LoginContext);

    const opneLoginDialog=()=>{
        setOpen(true);
    }
    return(
      <Box className={classes.wrapper}>

          <Link to='/'>
          {
              account ? <Profile account={account} setAccount={setAccount} /> :
             <Button className={classes.login} onClick={opneLoginDialog}>Login</Button>
          }
          </Link>
          <Typography style={{padding:'0px 15px'}}>More</Typography>
          <Link to="/cart" className={classes.conatiner}>
          <Badge badgeContent={4} color="secondary">
             <ShoppingCart />

          </Badge>
              <Typography className={classes.cart} style={{marginLeft:10}}>Cart</Typography>
          </Link>

          <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
      </Box>
    );
    
}