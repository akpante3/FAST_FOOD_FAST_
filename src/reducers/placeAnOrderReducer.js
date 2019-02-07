import { PLACE_AN_ORDER, PLACE_AN_ORDER_ERROR } from '../actions/types';

const intialState = [];

const placeAnOrderReducer = (state = intialState, action) => {
  switch (action.type) {
    case PLACE_AN_ORDER:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

      case PLACE_AN_ORDER_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    default:
      return state;
  }
};

export default placeAnOrderReducer;