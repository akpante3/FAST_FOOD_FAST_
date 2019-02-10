import axios from 'axios';
import  { GET_ORDERS, GET_ORDERS_ERROR } from './types';


const GetAllOrdersAction = () => (dispatch) => {
return axios.get('http://localhost:8000/api/v1/orders', {
    headers : {
        'Access-Control-Allow-Origin': '*',
        'accessToken' : window.localStorage.getItem('access-token')
    } })
        .then((response) => {
        console.log(response.data.data);
            dispatch({
                type: GET_ORDERS,
                payload: response.data.data
            });
    }).catch((error)=> {
        console.log(error.message);
        dispatch({
            type: GET_ORDERS_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default GetAllOrdersAction;