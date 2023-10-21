import React from "react";
import CartItems from "../../components/cartItems/CartItems";

const Cart = () => {
  return (
    <div className="cart pineapples section ">
      <h1 className="section-title">Your Shopping Cart</h1>
      <CartItems />
    </div>
  );
};

export default Cart;
