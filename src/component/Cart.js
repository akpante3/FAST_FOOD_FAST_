import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import '../../public/style.scss';
import CartCards from './CartCards';
import placeAnOrderAction from '../actions/placeAnOrderAction';
import updateOrderList from '../utils/updateOrderList';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Cart extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
          email: '',
          number: '',
          address:'',
          quantity:'',
          status:''
      }
      this.placeOrder = this.placeOrder.bind(this);
      this.addOrder = this.addOrder.bind(this)
    }
  
    handler (e) {
      this.setState({[e.target.name]: e.target.value})
   }

   addOrder (e, foodid) {
    updateOrderList(e, foodid);
   }
   placeOrder (e) {
       e.preventDefault();      
       const userDetails = {
           email: this.state.email,
           number: this.state.number,
           address: this.state.address,
       }
       const orders = JSON.parse(localStorage.getItem("orders"));
       orders.forEach(element => {
        if(element.quantity < 1 || element.quantity > 10) {
            console.log('iam')
        }
    });
       axios.defaults.headers.common['accessToken'] = localStorage.getItem('access-token');
       this.props.placeAnOrderAction(userDetails, orders);
       
   }
  
  
    render() {
      let total = null;
    
      return (
        <Fragment>
          { this.props.placeAnOrder && this.props.placeAnOrder.status  === 'SUCCESS' && <Redirect to='/orders/success' /> }
        <article>
          <Navbar />
          <br />
          <br />
          <div className="shopping-cart">
                <div className="feature-header">
                    <h1>Shopping Cart</h1>
                </div>
                <ul className="list">
                    <br />
                    <br />
                    {this.props.cart && this.props.cart.map(item => (
                      <li>
                        <CartCards
                        addOrder={this.addOrder}
                        food={item.name}
                        price={item.price} 
                        foodid={item.foodid}
                        />
                      </li>
                    ))}
                </ul>
                <form>
                    <label htmlFor="psw"><b>Email</b></label>
                    <br />
                    <input type="text" onChange={(e)=> this.handler(e)} placeholder="Enter Email" className="email" name="email" required />
                    <br />
                    <br />
                    <label htmlFor="psw"><b>Number</b></label>
                    <br />
                    <input type="text" placeholder="Enter Number" onChange={(e)=> this.handler(e)} className="number" name="number" required />
                    <br />
                    <br /> 
                    <label htmlFor="psw"><b>Address</b></label><br />
                    <input type="text" placeholder="Enter Address" onChange={(e)=> this.handler(e)} className="address" name="address" required />
                    <br />
                    <br />
                    {this.props.cart.forEach(element => {
                       total += parseInt(element.price)
                    })}
                    <h3>Total: {total}</h3>
                    <p className="total"></p>
                    <h4 className="error-message"></h4>
                    <button type="submit" onClick= {(e) => this.placeOrder(e)} id="place-order">Place order</button>               
                </form>
              <p className="error-message"></p>
            </div>
        </article>
      </Fragment>    
      );
    }
  }
  
  const mapStateToprops = (state) => ({
    cart: state.cart,
    placeAnOrder: state.placeAnOrder,
  });
  
  export default connect(mapStateToprops,{placeAnOrderAction})(Cart);