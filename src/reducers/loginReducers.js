import { LOG_IN, LOG_IN_ERROR}from '../actions/types';

const intialState = {
    email: '',
    password: '',
    status: '',
}

export default ( state= intialState, action) => {
   switch( action.type ){
       case LOG_IN: {
        state={
            email: action.payload.data.data.token,
            password: action.payload.data.data.token,
            status: 'success'
           }
           break;
       }
      
       case LOG_IN_ERROR: {

        state={
            email: null,
            password: null,
            status: 'failure'
           }
           break;
       }
       default:
        state;
   }
   return state
}