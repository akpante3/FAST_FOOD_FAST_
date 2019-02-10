
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {};

const defaultProps = {};

class orderSuccesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    if(this.props.order) {
        return (
            <React.Fragment>
            <br />
            <br />
            <br />
            <br /> 
            <br />
            <div class="shopping-cart">
                <div class="feature-header">
                    <h1>Your Order was Successfull!!!!<br />
                    For More exciting food check our home page</h1>
                </div>
                <ul class="detail">
                    <br />
                    <li>
                        <h4>Delivered to: {this.props.order.timeOrdered}</h4>
                        <br />
                        <h4>orderId: {this.props.order.orderID}</h4>
                        <br />
                        <h4>Ordered:  {this.props.order.timeOrdered}</h4>
                        <br />
                        <br />
                        <hr />
                    </li>
                </ul>
            </div>      
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
            <br />
            <br />
            <br />
            <br /> 
            <br />
            <div class="shopping-cart">
            <div class="feature-header">
                    <h1>No order has been made<br />
                    For More exciting food check our home page</h1>
                </div>
            </div>
            <br />
            <br />
            <hr />
            </React.Fragment> 

        );
    }
    }
}

 orderSuccesPage.propTypes = propTypes;
 orderSuccesPage.defaultProps = defaultProps;

 const mapStateToprops = (state) => ({
    order: state.placeAnOrder.payload,
  });

export default connect(mapStateToprops,{ })(orderSuccesPage);