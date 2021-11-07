import { imageURL } from '../../constants/data';
import {Box} from '@material-ui/core';

export default function MidSection(){
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Box display="flex" marginTop='20px' justifyContent="space-between">
        {
          imageURL.map(image => (
             <img src = {image}  style={{width: '33%'}}/>
          ))
        }
        </Box>
        <img src={coronaURL} style={{width:'100%', marginTop:'20px'}} />
        </>
    );
}