import {Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
     component:{
         marginTop: 40
     }
})
export default function Profile({account, setAccount}){
  const classes = useStyles();
  const [open, setOpen] =  useState(false);
     
    const handleClose=()=>{
        setOpen(false);
    }

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }

    const logout=()=>{
       setAccount('')
    }
    return (
      <>
       <Link style={{textDecoration:"none", color:"#fff"}}><Typography onClick={handleClick}>{account}</Typography></Link>

        <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose} className={classes.component} >
          <MenuItem onClick={() => logout()} >Logout</MenuItem>
        </Menu>
      </>
    );
}