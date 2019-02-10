const deleteFromcart = (foodid) => {
    console.log('i am');
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const ifExist = cartItems && cartItems.find(item => item.foodid === foodid);
  if (ifExist) {
    const index = cartItems.indexOf(ifExist);
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

export default deleteFromcart;