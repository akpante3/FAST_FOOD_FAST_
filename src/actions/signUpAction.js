import { SIGN_UP, SIGN_UP_ERROR } from './types';
import { error } from 'util';
import setAccessToken from '../utils/utils';
import axios from 'axios';


const signUpAction = (userDetails) => (dispatch) => {
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
              console.log(response, 'succcess');
            // if(response.status === 201) {
                const token = response.data.data.token;
                console.log(token, '00000');
                dispatch({
                    type: SIGN_UP,
                    payload: response,
                    status: 'SUCCESS'
                })
         
            localStorage.setItem('access-token', token);
            // return setAccessToken(token);
        // }
    }).catch((error)=> {
        console.log(error.response, '[[[[[[[[');
        dispatch({
            type: SIGN_UP_ERROR,
            payload: error.response,
            status: 'FAILURE'
         })
  
    });    
}

export default signUpAction;