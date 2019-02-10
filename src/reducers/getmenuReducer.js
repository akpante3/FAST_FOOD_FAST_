
import { GET_MENU } from '../actions/types';

const intialState = [];

const getMenuReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    default:
      return state;
  }
};

export default getMenuReducer;