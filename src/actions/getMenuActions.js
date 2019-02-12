import  { GET_MENU, GET_MENU_ERROR } from './types';
import axios from 'axios';
import orders from '../component/orders';

const GetMenuAction = () => (dispatch) => {

return axios.get('https://fast-food-fast-food.herokuapp.com/api/v1/menu')
        .then((response) => {
            dispatch({
                type: GET_MENU,
                payload: response.data.data
            });
    }).catch((error)=> {
        dispatch({
            type: GET_MENU_ERROR,
            payload:'failure you have an error'
            })
    });  
}

export default GetMenuAction;