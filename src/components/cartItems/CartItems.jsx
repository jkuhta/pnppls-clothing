import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import { useState } from "react";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  const [promoUsed, setPromoUsed] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handlePromoClick = () => {
    setPromoCode("");
    if (promoCode === "PINEAPPLES10") setPromoUsed(true);
    else setPromoUsed(false);
  };

  return (
    <div className="cartitems">
      {getTotalCartAmount() > 0 ? (
        <div>
          <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Color</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr />
          {cartItems
            .filter((item) => item && typeof item === "object")
            .map((e, index) => {
              const product = all_product.find(
                (product) => product.id === e.id
              );

              return (
                <div key={index}>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      className="cartitems-product-icon"
                      src={product.image}
                      alt=""
                    />
                    <p>{product.name}</p>
                    <p>€ {product.new_price}</p>
                    <p className="cart-size">{e.size}</p>
                    <p>{e.color.name}</p>
                    <button className="cartitems-quantity-btn">
                      <div
                        className="cartitems-quantity cartitems-quantity-minus"
                        onClick={() =>
                          removeFromCart({
                            id: e.id,
                            size: e.size,
                            color: e.color,
                          })
                        }
                      >
                        -
                      </div>
                      <div className="cartitems-quantity cartitem-quantity-number">
                        {e.quantity}
                      </div>
                      <div
                        className="cartitems-quantity cartitems-quantity-plus"
                        onClick={() =>
                          addToCart({
                            id: e.id,
                            size: e.size,
                            color: e.color,
                          })
                        }
                      >
                        +
                      </div>
                    </button>

                    <p>
                      <b>€ {(product.new_price * e.quantity).toFixed(2)}</b>
                    </p>
                    <i
                      className="fa-regular fa-trash-can cartitems-remove-item"
                      onClick={() =>
                        removeFromCart({
                          id: e.id,
                          size: e.size,
                          color: e.color,
                        })
                      }
                    ></i>
                  </div>
                </div>
              );
            })}

          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Summary</h1>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>€ {getTotalCartAmount().toFixed(2)}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>{getTotalCartAmount() > 60 ? "Free" : "€1"}</p>
              </div>
              <hr />
              <div
                className={
                  promoUsed
                    ? "cartitems-total-item"
                    : "cartitems-total-item hidden"
                }
              >
                <p>Promo code</p>
                <p>10%</p>
              </div>
              {promoUsed && <hr />}

              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>
                  €{" "}
                  {(promoUsed
                    ? 0.9 *
                      (getTotalCartAmount() > 60
                        ? getTotalCartAmount()
                        : getTotalCartAmount() + 1)
                    : getTotalCartAmount() > 60
                    ? getTotalCartAmount()
                    : getTotalCartAmount() + 1
                  ).toFixed(2)}
                </h3>
              </div>
              <button className="cartitems-checkout-btn custom-button">
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cartitems-down-right">
              <div className="cartitems-promocode">
                <p>If you have a promo code enter it here: </p>
                <div className="cartitems-promobox">
                  <input
                    type="text"
                    placeholder="PINEAPPLES10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button onClick={handlePromoClick}>Submit</button>
                </div>
              </div>
              <div className="pd-shipping-box">
                <div className="pd-shipping-line">
                  <i className="pd-shipping-icon fa-solid fa-gift"></i>One free
                  PNPPLS keychain per order
                </div>
                <div className="pd-shipping-line">
                  <i className="pd-shipping-icon fa-solid fa-truck-fast"></i>
                  Free shipping on orders over €60
                </div>
                <div className="pd-shipping-line">
                  <i className="pd-shipping-icon fa-solid fa-rotate-left"></i>60
                  day returns
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartItems;
