import { SIGN_UP, SIGN_UP_ERROR } from './types';
import { error } from 'util';
import setAccessToken from '../utils/utils';
import axios from 'axios';


const signUpAction = (userDetails, history) => (dispatch) => {
    const {
        email,
        password,
        username,
        address
    } = userDetails;

    return axios.post('https://fast-food-fast-food.herokuapp.com/api/v1/auth/signup', {
        email, password, username, address
        })
          .then(response => {
                const token = response.data.data.token;
                dispatch({
                    type: SIGN_UP,
                    payload: response,
                    status: 'SUCCESS'
                })
            localStorage.setItem('access-token', token);
            axios.defaults.headers.common['accessToken'] = localStorage.getItem('access-token');
            history.push("/menu");

    }).catch((error)=> {
        dispatch({
            type: SIGN_UP_ERROR,
            payload: error.response,
            status: 'FAILURE'
         })
  
    });    
}

export default signUpAction;