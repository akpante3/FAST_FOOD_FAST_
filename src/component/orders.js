import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import '../../public/style.scss';
import CartCards from './CartCards';
import OrdersCards from './OrdersCards';
import getAllOrders from '../actions/getAllOrdersAction';
import Footer from './Footer';
// import placeAnOrderAction from '../actions/placeAnOrderAction';
// import updateOrderList from '../utils/updateOrderList';
// import axios from 'axios';

class Orders extends React.Component{
constructor(props) {
super(props);
    this.state = {
        showDetails: false
    }
    this.toggleView = this.toggleView.bind(this);
}

componentDidMount () {
  this.props.getAllOrders();
}
toggleView () {
    this.setState({
    showDetails: !this.state.showDetails,
    });
}
    render() {
        return (
            <Fragment>
            <Navbar 
            home={'Home'}
            />
            <br />
            <br />
            <br/>
            <br />
            <br />
            <div class="orders">
                <div class="feature-header">
                  <h1>List of Orders</h1>
                </div>
                <ul class="list"> 
                {this.props.orders && this.props.orders.map((element)=> {
                 { console.log(element)}
                  return <OrdersCards 
                  quantity={element.quantity} 
                  email={element.email}
                  date={element.timeordered}
                  orderId={element.orderid}
                  foodid={element.foodid}
                  status={element.status}
                  />
                })}
                </ul>
            </div> 
            <Footer />
            </Fragment>
        );
    }
}

const mapStateToprops = (state) => ({
    cart: state.cart,
    orders: state.getallorders.payload,
  });

export default connect(mapStateToprops,{getAllOrders})(Orders);