import { Box, makeStyles, Typography, Button} from '@material-ui/core';
import clsx from 'clsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({

    leftContainer:{
        padding: '40px 0 0 80px'
    },

    image:{
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },

    button:{
        height: 50,
        width: '46%'
    },

    addToCart:{
       background: '#ff9f00',
       color: '#fff',
       marginRight: 5
    },

    buyNow:{
        background: '#fb641b',
        color: '#fff'
    }
})

export default function ActionItems({ products }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const addItemToCart=()=>{
        dispatch(addToCart(products.id));
        history.push('/cart')
    }

  return (
    <Box className={classes.leftContainer}>
      <img src={products.detailUrl} className={classes.image} />

      <Button onClick={addItemToCart} variant="contained" className={clsx(classes.button , classes.addToCart)}>
        <ShoppingCartIcon /> Add to cart
      </Button>
      <Button variant="contained" className={clsx(classes.button, classes.buyNow)}>
        <FlashOnIcon /> Buy now
      </Button>
    </Box>
  );
}
