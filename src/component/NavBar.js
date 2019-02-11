import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <a href="./index.html">fast-food</a>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>

        <input type="checkbox" id="nav-check" />
        <div className="nav-links">
          <Link to="./cart">{this.props.cart}</Link>
          <Link to="/">{this.props.home}</Link>
          <Link to="/login">{this.props.login}</Link>
          <a href="./shoppingCart.html"><i className="fas fa-shopping-cart fa-1x shopping-cart-button" /></a>
        </div>
      </div>
    );
  }
}

export default NavBar;
