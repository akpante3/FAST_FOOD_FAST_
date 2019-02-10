import { LOG_IN, LOG_IN_ERROR}from '../actions/types';

const intialState = {
    email: '',
    password: '',
    status: '',
}

export default ( state= intialState, action) => {
   switch( action.type ){
       case LOG_IN: 
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      }) 
       case LOG_IN_ERROR:
        return ({
            ...state,
            payload: action.payload,
            status: 'FAILURE',
          });
       default:
        state;
   }
   return state
}