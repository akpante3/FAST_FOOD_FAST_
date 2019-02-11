import React, { Fragment } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import GetMenuAction from '../actions/getMenuActions';
import addToCartAction from '../actions/addToCartAction';
import Cards from './Cards';
import '../../public/style.scss';
import Footer from './Footer';



class MenuPage extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
          menu: []
      }
      this.cart = this.cart.bind(this);
    }

  componentWillMount() {
    axios.defaults.headers.common['accessToken'] = localStorage.getItem('access-token');
    this.props.GetMenuAction();
  }

  cart (data) {
    this.props.addToCartAction(data)
  }

  render() {
      return (
        <Fragment>
            <div>
            <Navbar 
              home={'Home'}
              cart={'Cart'}
            />
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
                </p>
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
            </div>
          </ Fragment>
          );
        }
  }


const mapStateToprops = (state) => ({
  menu: state.getmenu.payload,
  cart: state.cart,
  signUp: state.signup.payload
});

export default connect(mapStateToprops,{GetMenuAction, addToCartAction})(MenuPage);
