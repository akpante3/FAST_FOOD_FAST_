import  { ADD_TO_CART, ADD_TO_CART_ERROR, SET_CART } from './types';

export const setCartItems = (data) => {
    return {
        type: SET_CART,
        payload: data
    }
}

const addToCartAction = (data) => (dispatch) => {
    if (localStorage.getItem("cartItems")) {
        const oldCart = JSON.parse(localStorage.getItem("cartItems"));
        const newCart = [...oldCart, data];
        localStorage.setItem("cartItems", JSON.stringify(newCart));
    } else {
     const cartItems = [data];
     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    dispatch({
        type: ADD_TO_CART,
        payload: data
    });
    // dispatch(setCartItems(data));
}

export default addToCartAction;