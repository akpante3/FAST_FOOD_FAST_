import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducers';
import getmenuReducer from './getmenuReducer';
import placeAnOrderReducer from './placeAnOrderReducer';
import addtocartReducer from './addtocartReducer';
import getAllOrdersReducer from  './getAllOrdersReducer';
import updateOrderReducer from './updateStatusReducer';

export default combineReducers({
    signup: signupReducer,
    login: loginReducer,
    getmenu: getmenuReducer,
    placeAnOrder: placeAnOrderReducer,
    cart: addtocartReducer,
    getallorders: getAllOrdersReducer,
    updateOrder: updateOrderReducer,
});