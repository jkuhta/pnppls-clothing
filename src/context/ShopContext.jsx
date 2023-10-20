import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = new Array(all_product.length).fill(0);
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (item) => {
    const { id, size, color } = item;
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === id && cartItem.size === size && cartItem.color === color
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems((prevCart) => [
        ...prevCart,
        { id, size, color, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (item) => {
    const { id, size, color } = item;
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === id && cartItem.size === size && cartItem.color === color
    );

    if (existingItemIndex !== -1) {
      const updatedCart = cartItems.map((cartItem, index) => {
        if (index === existingItemIndex) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return null; // Set to null to indicate that this item should be removed
        }
        return cartItem;
      });
      setCartItems(updatedCart.filter((item) => item !== null));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].quantity > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === cartItems[i].id
        );
        totalAmount += itemInfo.new_price * cartItems[i].quantity;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    cartItems.forEach((item) => {
      if (item.quantity > 0) {
        totalItems += item.quantity;
      }
    });
    return totalItems;
  };

  const getCartItems = () => {
    return cartItems;
  };

  const contextValue = {
    getCartItems,
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
