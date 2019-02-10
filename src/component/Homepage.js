import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import GetMenuAction from '../actions/getMenuActions';
import addToCartAction from '../actions/addToCartAction';
import Cards from './Cards';
import '../../public/style.css';


class HomePage extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
          menu: []
      }
      this.cart = this.cart.bind(this);
    }

  componentWillMount() {
    this.props.GetMenuAction();
  }

  cart (data) {
    this.props.addToCartAction(data)
  }

  render() {

    return (
      <Fragment>
        <article>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <div className="home-page">
            <div className="feature-header">
              <h2>Featured Food</h2>
              <p>
                make amazing fast food orders
                <br />
              with speedy delivery
                {' '}
              </p>
              <input id='search-bar' type="text" name="search" placeholder="Search.." />
              <a href="#"><button id="submit" type="submit">Search</button></a>
            </div>
            <br />
            <div className="content" >
            {this.props.menu && this.props.menu.map(item => (
               <Cards 
               cart={this.cart}
               food={item.food}
               image={item.image}
               price={item.price}
               foodId={item.foodid}
               />
            ))}
            </div>
            <br />
          </div>
          <footer>
            <h3>fast-food-fast   &copy 2018</h3>
          </footer>
        </article>
      </Fragment>
    );
  }
}

const mapStateToprops = (state) => ({
  menu: state.getmenu.payload,
  cart: state.cart
});

export default connect(mapStateToprops,{GetMenuAction, addToCartAction})(HomePage);
