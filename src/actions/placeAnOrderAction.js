import  { PLACE_AN_ORDER, PLACE_AN_ORDER_ERROR } from './types';
import axios from 'axios';


const placeAnOrderAction = (data, orders) => (dispatch) => {

return axios.post('https://fast-food-fast-food.herokuapp.com/api/v1/orders', { 
    ...data,
    orders,
    headers : {
        'Access-Control-Allow-Origin': '*',
        'accessToken' : window.localStorage.getItem('access-token')
    } })
.then((response) => {
            dispatch({
                type: PLACE_AN_ORDER,
                payload: response.data.data
            });
            localStorage.setItem("cartItems", "")
    }).catch((error)=> {
        dispatch({
            type: PLACE_AN_ORDER_ERROR,
            payload: error.response,
            })
    });  
}

export default placeAnOrderAction;