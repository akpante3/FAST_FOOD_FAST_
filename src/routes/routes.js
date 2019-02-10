import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../component/Homepage';
import Login from '../component/Login';
import signUp from '../component/signUp';
import Cart from '../component/Cart';
import Orders from '../component/orders';
import orderSuccesPage from '../component/orderSuccesPage';

const Routes = () => (
  <div className='container'>
      <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={signUp} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/orders/success' component={orderSuccesPage} />
      </Switch>
  </Router>
 
  </div>
);

export default Routes;