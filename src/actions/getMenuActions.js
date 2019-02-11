import  { GET_MENU, GET_MENU_ERROR } from './types';
import axios from 'axios';
import orders from '../component/orders';

const GetMenuAction = () => (dispatch) => {

return axios.get('https://fast-food-fast-food.herokuapp.com/api/v1/menu')
        .then((response) => {
        console.log(response.data.data);
            dispatch({
                type: GET_MENU,
                payload: response.data.data
            });
    }).catch((error)=> {
        console.log(error.message);
        dispatch({
            type: GET_MENU_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default GetMenuAction;