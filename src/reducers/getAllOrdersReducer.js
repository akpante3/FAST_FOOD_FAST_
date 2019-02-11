import { GET_ORDERS } from '../actions/types';

const intialState = {
  payload: '',
  status: '',
};

const getAllOrdersReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    default:
      return state;
  }
};

export default getAllOrdersReducer;