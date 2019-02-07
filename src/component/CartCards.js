import React, { Fragment } from 'react';

const CartCards = (props) => {
    return (
        <Fragment>
        <h2>{props.food}</h2>
        <br />
        <h4>Price:{props.price}</h4>
        <br />
        <h4>Quantity:</h4>
        <input type="number" onChange={(e)=> props.addOrder(e, props.foodid)} placeholder="Quantity" className="email" name="email" required />
        <button className="delete">Delete</button>
        <br />
        <br />
        <hr />
        </Fragment>
    );
}

export default CartCards;