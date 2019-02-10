import React, { Fragment } from 'react';
import deleteFromcart from '../utils/deleteFromCart';

const CartCards = (props) => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const ifExist = storage && storage.find(item => item.foodid == props.foodid);
    if (ifExist) {
        return (
            <Fragment>
            <h2>{props.food}</h2>
            <br />
            <h4>Price:{props.price}</h4>
            <br />
            <h4>Quantity:</h4>
            <input type="number" onChange={(e)=> props.addOrder(e, props.foodid)} placeholder="Quantity" className="email" name="email" required />
            <button className="delete" onClick={() => deleteFromcart(props.foodid)}>Delete</button>
            <br />
            <br />
            <hr />
            </Fragment>
        )
    } else {
        return null;
    }

    }


export default CartCards;