import NavBar from './NavBar';
import Banner from './Banner';
import { Box, makeStyles } from '@material-ui/core';
import Slide from './Slide';
import MidSection from './MidSection';
// import { products } from '../../constants/data';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';


const useStyles = makeStyles({
  component: {
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
  image: {
    backgroundColor: '#fff',
    padding: 5,
    margin: '12px 0 0 12px',
  },
});

export default function Home() {
  const classes = useStyles();
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(listProducts())
  }, [dispatch]);
  
  const adURL =
    'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <>
      <NavBar />

      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: 'flex' }}>
          <Box style={{ width: '83%' }}>
            <Slide timer={true} title="Deal of the day" products={products} />
          </Box>

          <Box className={classes.image}>
            <img src={adURL} alt ="" style={{ width: 230, height: 'auto' }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for you" products={products} />
        <Slide timer={false} title="Suggested items" products={products} />
        <Slide timer={false} title="Top selection" products={products} />
        <Slide timer={false} title="Recommended items" products={products} />
        <Slide timer={false} title="Bestsellers" products={products} />
      </Box>
    </>
  );
}
