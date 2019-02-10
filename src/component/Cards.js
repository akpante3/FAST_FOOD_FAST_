import React from 'react';

const Cards = (props) => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));

     const ifExist = storage && storage.find(item => item.foodid == props.foodId);

    return (
            <div><img src={props.image} alt="food" /><p> {props.food} </p>
                <br />
                <p>Price:{props.price}</p>
                <br />
                <a>
                    {storage && ifExist ? 
                     <button className="" ><i className="fas fa-shopping-cart fa-1x"></i>  added to cart</button>
                    : <button className="add-cart" onClick= {()=>props.cart({price: props.price, name: props.food, foodid: props.foodId, quantity: 1})}><i className="fas fa-shopping-cart fa-1x"></i>  add to cart</button>
                    }
                </a>
            </div>
    );
}

export default Cards;