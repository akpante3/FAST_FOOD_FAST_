import  { LOG_IN, LOG_IN_ERROR } from './types';
import { error } from 'util';
import axios from 'axios';
import setAccessToken from '../utils/utils';


const logInAction = (userDetails) => (dispatch) => {
    const {
        email,
        password,
    } = userDetails;
 
    return axios.post('https://api-fast-food.herokuapp.com/api/v1/auth/login', {
       email, password,
        })
          .then((response) => {
            if(response.status === 200) {
                dispatch({
                    type: LOG_IN,
                    payload: response
                })
             const token = response.data.data.token;
             setAccessToken(token);
            }else if(response.data.status === 'failure') {
                dispatch({
                    type: LOG_IN_ERROR,
                    payload:response.data.message
                 })
               
            }
        }).catch((error)=> {
            dispatch({
                type: LOG_IN_ERROR,
                payload:'failure you have an error'
             })
        });  
}

export default logInAction;