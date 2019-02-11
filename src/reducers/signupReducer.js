import { SIGN_UP, SIGN_UP_ERROR }from '../actions/types';

const intialState = {
    email: '',
    password: '',
    username: '',
    address: ''
}

export default ( state = intialState, action) => {
   switch( action.type ){
       case SIGN_UP:
       return ({
           ...state,
            email: action.payload.email,
            password: action.payload.password,
            username: action.payload.username,
            address: action.payload.address,
            payload: action.payload
           })
       
        case SIGN_UP_ERROR:
        return ({
                ...state,
                email: null,
                password: null,
                username: null,
                address: null,
                payload: action.payload
            })
       default:
        state;
   }
   return state
}