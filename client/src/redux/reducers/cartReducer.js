import * as actionTypes from '../constants/cartConstant.js'

export const cartReducer=(state= { cartItems: []}, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product=> product.id === item.id);

            if(exist){
                return
            }
            else{
            return {...state, cartItems: [...state.cartItems, item]}
            }

        default:
             return state;    
    }
    
}