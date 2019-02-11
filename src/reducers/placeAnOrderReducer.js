import { PLACE_AN_ORDER, PLACE_AN_ORDER_ERROR } from '../actions/types';

const intialState = {
  payload: '',
  status: '',
};

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
        status: 'FAILURE',
      });

    default:
      return state;
  }
};

export default placeAnOrderReducer;