import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon_n.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);

  const addOrder = async () => {
    if (Object.keys(cartItems).length === 0) {
      setEmptyCart(true);
      setTimeout(() => {
        setEmptyCart(false);
      }, 3000);
      return;
    }

    if (localStorage.getItem("auth-token")) {
      try {
        const response = await fetch('http://localhost:4000/confirm', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem("auth-token")}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify() // Use requestData instead of undefined data
        });

        if (!response.ok) {
          throw new Error(`Error fetching /confirm: ${response.statusText}`);
        }

        setOrderPlaced(true);
        setTimeout(() => {
          setOrderPlaced(false);
          removeFromCart(null, true); // Reset the cart
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p className="cartitems-product-title">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={() => { addOrder() }}>PROCEED TO CHECKOUT</button>
          {orderPlaced && <p className="order-placed-message">Order placed successfully!</p>}
          {emptyCart && <p className="empty-cart-message">There are no items in the cart!</p>}
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <a href="https://wa.me/03312719166" target="_blank" className="whatsapp-button">
        <img src={whatsapp_icon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default CartItems;
