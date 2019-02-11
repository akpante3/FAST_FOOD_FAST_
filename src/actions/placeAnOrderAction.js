import  { PLACE_AN_ORDER, PLACE_AN_ORDER_ERROR } from './types';
import axios from 'axios';


const placeAnOrderAction = (data, orders) => (dispatch) => {

return axios.post('https://api-fast-food.herokuapp.com/api/v1/orders', { 
    ...data,
    orders,
    headers : {
        'Access-Control-Allow-Origin': '*',
        'accessToken' : window.localStorage.getItem('access-token')
    } })
.then((response) => {
        console.log(response.data.data, 'Actions ????????');
            dispatch({
                type: PLACE_AN_ORDER,
                payload: response.data.data
            });
            localStorage.setItem("cartItems", "")
    }).catch((error)=> {
        console.log(error);
        dispatch({
            type: PLACE_AN_ORDER_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default placeAnOrderAction;