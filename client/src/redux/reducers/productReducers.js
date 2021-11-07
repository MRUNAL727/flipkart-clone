// import { getProducts } from "../actions/productActions.js";

export const getProductsReducer= (state ={ products:[] }, action)=>{
    switch (action.type) {
      case 'success':
        return { products: action.payload };
      case 'fail':
        return { error: action.payload };
      default:
          return state
    }
}


export const getProductDetailsReducer = (state= {product: {}},action)=>{
 switch (action.type) {
   case 'detailsSuccess':
     return { products: action.payload };
   case 'detailsFail':
     return { error: action.payload };
   default:
     return state;
 }

}