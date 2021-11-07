import axios from 'axios';


const url = 'http://localhost:8000';

export const getProducts=() => async(dispatch)=>{
   try{
       const {data} = await axios.get('http://localhost:8000/products');
       console.log(data);
       dispatch({type: 'success', payload:data})

   }catch(error){
       dispatch({ type: 'fail', payload: error });
   }
}


export const getProductDetails = (id)=> async(dispatch)=>{
      try {
        const { data } = await axios.get(`${url}/product/${id}`)
       dispatch({ type: 'detailsSuccess', payload: data });

      } catch (error) {
       dispatch({ type: 'detailsFail', payload: error });

           console.log(error);
      }
}