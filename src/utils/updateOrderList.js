const updateOrderList = (e, foodid) => {
    const item = {
        foodid: foodid,
        quantity: parseInt(e.target.value)
      }
      // if orders exist in local storage
       if (localStorage.getItem("orders")) {
        const orders = JSON.parse(localStorage.getItem("orders"));
        const ifExist = orders && orders.find(item => item.foodid == foodid);
      // if item exist in the local storage
        if(ifExist) {
          const index = orders.indexOf(ifExist);
          orders.splice(index, 1);
          const updateOrder = [...orders, item];
          localStorage.setItem("orders", JSON.stringify(updateOrder));
      //if item does not exist in local storage
        } else {
         const newOrder = [...orders, item];
         localStorage.setItem("orders", JSON.stringify(newOrder));
          console.log(item);
        }
      // if orders have not been created in local storage
       } else {
        const recentOrder = [item]
        localStorage.setItem("orders", JSON.stringify(recentOrder));
       }
}

export default updateOrderList;