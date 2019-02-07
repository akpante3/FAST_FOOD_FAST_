import React, { Component } from 'react';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';
;
import { setCartItems } from './actions/addToCartAction';

const cartItems = localStorage.getItem('cartItems');
if (cartItems) {
  const data = JSON.parse(cartItems);

  store.dispatch(setCartItems(data));
  // store.dispatch(addToCartAction(data))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;