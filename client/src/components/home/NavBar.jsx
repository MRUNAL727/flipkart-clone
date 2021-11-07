import {navData} from '../../constants/data';
import {Box, Typography, makeStyles} from '@material-ui/core';
import { margin } from '@mui/system';

const useStyles = makeStyles({
    component:{
        display: 'flex',
        margin: '35px 130px',
        justifyContent: 'space-between'
    },
    container:{
        textAlign: 'center',
        padding: '12px 8px'
    },

    image:{
        width: 74
    },
    tex:{
        fontSize: 14,
        fontWeight: 600
    }
})

export default function NavBar(){
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            {
                navData.map(data=>(
                    <Box className={classes.container}>
                    <img src={data.url} className={classes.image} />
                    <Typography>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>

    );
} 