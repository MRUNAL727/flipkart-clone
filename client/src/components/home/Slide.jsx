import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Countdown from 'react-countdown';



const useStyle = makeStyles({
     image:{
         height: 150,
         margin: '0px 0px'
     },
     component:{
        marginTop: 12, 
        backgroundColor: '#fff'
    },
    
     deal:{
         padding: '35px 20px',
         display: 'flex'
     },
     dealtext:{
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px'
         
     },
     button:{
         marginLeft: 'auto',
         backgroundColor: '#2874f0',
         borderRadius: 2,
         color: 'white'
     },

     text:{
       fontSize: 14   
     },
     
    wrapper:{
        textAlign: 'center',
        padding: '25px 15px'
    }
})

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default function Slide({timer, title, products}){
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return(
        <Box className={classes.component}>
          <Box className={classes.deal}>
            <Typography className={classes.dealtext}>{title}</Typography>
            { 
              timer &&
              <>
            <img src={timerURL} style={{width:24}} />
            <Countdown date={Date.now() + 5.04e+7}> </Countdown>
            <Button className={classes.button}>View all</Button>
            </>
            }

          </Box>
        <Carousel responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass= 'custom-dot-list-style'
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel conatiner"
         >
            {
                products.map(product=>(
                  <Link to={`product/${product.id}`}>
                    <Box  className={classes.wrapper}>
                    <img src = {product.url} className={classes.image} />
                    <Typography className={classes.text} style={{fontWeight:600}}>{product.title.shortTitle}</Typography>
                    <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
                    <Typography className={classes.text}>{product.tagline}</Typography>

                    </Box>
                    </Link>
                ))
            }
        </Carousel>
        </Box>
    )
}