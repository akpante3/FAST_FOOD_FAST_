import { ADD_TO_CART, SET_CART } from '../actions/types';

const intialState = [];

const addtocartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    console.log(action.payload);
      return [
        ...state,
        action.payload,
      ];


    case SET_CART:
    console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export default addtocartReducer;