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

    return axios.post('http://localhost:8000/api/v1/auth/signup', {
        email, password, username, address
        })
          .then(data => {
              console.log(data, 'succcess');
            // if(response.status === 201) {
                dispatch({
                    type: SIGN_UP,
                    payload: data,
                    status: 'SUCCESS'
                })
            const token = response.data.data.token;
            return setAccessToken(token);
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