import  { UPDATE_ORDER, UPDATE_ORDER_ERROR } from './types';
import axios from 'axios';


const updateStatusAction = (id, status) => (dispatch) => {
axios.defaults.headers.common['accessToken'] = localStorage.getItem('access-token');
return axios.put(`https://api-fast-food.herokuapp.com/api/v1/orders/${id}`, {
    status,
    headers : {
        'Access-Control-Allow-Origin': '*',
        'accessToken' : window.localStorage.getItem('access-token')
    } })
.then((response) => {
        console.log(response);
            dispatch({
                type: UPDATE_ORDER,
                payload: response
            });
    }).catch((error)=> {
        console.log(error);
        dispatch({
            type: UPDATE_ORDER_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default updateStatusAction;