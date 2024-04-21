import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [orderDetails, setOrderDetails] = useState({
    user: "",
    products: null,
    total:0
  });
  // const addOrder = () => {
  //   if(localStorage.getItem("auth-token"))
  //   {
  //   fetch('http://localhost:4000/confirm', {
  //     method: 'POST',
  //     headers: {
  //       Accept:'application/json',
  //       'auth-token':`${localStorage.getItem("auth-token")}`,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({}) // Use requestData instead of undefined data
  //   })
  //   .then((resp) => resp.json())
  //   .then((data) => {console.log('Order confirmed:', data);});}
  // }; // Empty dependency array means this effect runs only once on component mount

  const addOrder = async () => {
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
  
        const data = await response.json();
        console.log('Order confirmed:', data);
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
          return <div>
            <div className="cartitems-format-main cartitems-format">
              <img className="cartitems-product-icon" src={e.image} alt="" />
              <p cartitems-product-title>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
            </div>
            <hr />
          </div>;
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
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
