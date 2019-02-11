import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import '../../public/style.scss';
// import updateStatusAction from '../actions/updateStatusAction';

export class OrdersCards extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          showDetails: false
      }
      this.toggleView = this.toggleView.bind(this);
      // this.updateAnOrder = this.updateAnOrder.bind(this);
  }
  
toggleView () {
  this.setState({
  showDetails: !this.state.showDetails,
  });
}

  render () {
    return (
      <Fragment>
        <li>
          <h2>orderId : {this.props.orderId}</h2>
          <button class="info-button" onClick= {() => this.toggleView()}>info</button>
          { this.state.showDetails ? 
              <div class="info">
              <h3>Quantity of Order: {this.props.quantity}</h3>
              <br />
              <h3>food ID: {this.props.foodid}</h3>
              <br />
              <h3>Email: {this.props.email}</h3>
              <br />
              <h3>Date: {this.props.date}</h3>
              <br />
              <div>
                <div>
                <button class="decline" >Deline</button> 
                  <button class="accept">Accept</button>
                </div>
                  <div></div>
              </div>
          </div> 
          : null 
          }
        </li>
        <hr />
      </Fragment>
    )
  }
}
const mapStateToprops = (state) => ({
  orders: state.getallorders.payload,
});

export default connect(mapStateToprops,null)(OrdersCards);