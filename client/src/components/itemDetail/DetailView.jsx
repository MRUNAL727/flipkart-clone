import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../redux/actions/productActions';
import {Box, makeStyles, Typography} from '@material-ui/core'
import clsx from 'clsx';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ActionItems from './ActionItems';

const useStyles = makeStyles({
  component: {
    backgroundColor: '#F2F2F2',
    marginTop: 100,
  },

  container: {
    margin: '0 80px',
    backgroundColor: '#fff',
    display: 'flex',
  },

  smallText: {
    fontSize: 14,
    '& > *':{
      marginTop: 10,
      fontSize: 14
    }
  },

  greyTextColor: {
    color: 'grey',
  },

  rightContainer: {
    marginTop: 50,
    '& > *': {
      marginTop: 10,
    },
  },

  badge:{
    color: 'green',
    fontSize: 14,
    marginRight: 10
  }
});

export default function DetailView({match}){
   
  const classes = useStyles();

    const { products } = useSelector(state=> state.getProductDetails);
    const dispatch = useDispatch();

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    useEffect(()=>{
      dispatch(getProductDetails(match.params.id));
    }, [dispatch])


  return (
    <Box className={classes.component}>
      {products && Object.keys(products).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: '40%' }}>
            <ActionItems products={products} />
          </Box>

          <Box className={classes.rightContainer}>
            <Typography>{products.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              8 Ratings & 1 review
            </Typography>

            <Typography>
              <span>₹{products.price.cost}</span> &nbsp; &nbsp; &nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{products.price.mrp}</strike>
              </span>{' '}
              &nbsp; &nbsp; &nbsp;
              <span style={{ color: '#388E3C' }}>
                {products.price.discount} off
              </span>
            </Typography>
            <Typography>Available offers</Typography>
            <Box className={classes.smallText}>
              <Typography>
                <LocalOfferIcon className={classes.badge} />
                Special PriceGet extra 5% off (price inclusive of discount)T&C
                Bank
              </Typography>
              <Typography>
                <LocalOfferIcon className={classes.badge} />
                Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
                Bank
              </Typography>
              <Typography>
                <LocalOfferIcon className={classes.badge} />
                Offer15% Instant discount on first Pay Later order of ₹500 and
              </Typography>
            </Box>

            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell
                    className={classes.greyTextColor}
                    style={{ borderBottom: 'none' }}
                  >
                    Delivery
                  </TableCell>
                  <TableCell style={{ borderBottom: 'none' }}>
                    {date.toDateString()}
                  </TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell
                    className={classes.greyTextColor}
                    style={{ borderBottom: 'none' }}
                  >
                    Warranty
                  </TableCell>
                  <TableCell style={{ borderBottom: 'none' }}>
                    No Warranty
                  </TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell
                    style={{ borderBottom: 'none' }}
                    className={classes.greyTextColor}
                  >
                    Seller
                  </TableCell>
                  <TableCell style={{ borderBottom: 'none' }}>XYZ</TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Description
                  </TableCell>
                  <TableCell>{products.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
    </Box>
  );
}