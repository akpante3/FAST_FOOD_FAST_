import axios from 'axios';
import  { GET_ORDERS, GET_ORDERS_ERROR } from './types';

// https://api-fast-food.herokuapp.com/api/v1/auth/signup
const GetAllOrdersAction = () => (dispatch) => {
return axios.get(`${process.env.BASE_URL_PROD}/api/v1/orders`, {
    headers : {
        'Access-Control-Allow-Origin': '*',
        'accessToken' : window.localStorage.getItem('access-token')
    } })
        .then((response) => {
            dispatch({
                type: GET_ORDERS,
                payload: response.data.data
            });
    }).catch((error)=> {
        dispatch({
            type: GET_ORDERS_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default GetAllOrdersAction;