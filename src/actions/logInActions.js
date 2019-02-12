import  { LOG_IN, LOG_IN_ERROR } from './types';
import { error } from 'util';
import axios from 'axios';
import setAccessToken from '../utils/utils';


const logInAction = (userDetails, history) => (dispatch) => {
    const {
        email,
        password,
    } = userDetails;
 
    return axios.post('https://fast-food-fast-food.herokuapp.com/api/v1/auth/login', {
       email, password,
        })
          .then((response) => {
                dispatch({
                    type: LOG_IN,
                    payload: response
                })
             const token = response.data.data.token;
             localStorage.setItem('access-token', token);
             axios.defaults.headers.common['accessToken'] = localStorage.getItem('access-token');
             history.push("/menu");
  
        }).catch((error)=> {
            dispatch({
                type: LOG_IN_ERROR,
                payload:'failure you have an error'
             })
        });  
}

export default logInAction;