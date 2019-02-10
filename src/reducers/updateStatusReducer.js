import { UPDATE_ORDER, UPDATE_ORDER_ERROR} from '../actions/types';

const intialState = [];

const updateOrderReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });
      case UPDATE_ORDER_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILURE',
      });

    default:
      return state;
  }
};

export default updateOrderReducer;