import { SIGN_UP, SIGN_UP_ERROR }from '../actions/types';

const intialState = {
    email: '',
    password: '',
    username: '',
    address: ''
}

export default ( state = intialState, action) => {
   switch( action.type ){
       case SIGN_UP:{
        state={
            email: action.payload.email,
            password: action.payload.password,
            username: action.payload.username,
            address: action.payload.address,
            data: action.payload
           }
           break;
       }
        case SIGN_UP_ERROR: {
            state={
                email: null,
                password: null,
                username: null,
                address: null,
                data: action.payload
            }
        }
       default:
        state;
   }
   return state
}