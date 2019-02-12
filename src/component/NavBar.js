import React from 'react';


// eslint-disable-next-line react/prefer-stateless-function
export class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <a href="/">fast-food</a>
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
          {this.props.cart}
          {this.props.home}
          {this.props.login}
          {this.props.signup}
          <a href="./shoppingCart.html"><i className="fas fa-shopping-cart fa-1x shopping-cart-button" /></a>
        </div>
      </div>
    );
  }
}

export default NavBar;
