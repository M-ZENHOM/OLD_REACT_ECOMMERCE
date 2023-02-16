import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, products } = useShoppingCart();
  return (
    <>
      {cartItems.length !== 0 ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
          className="cartContainer"
        >
          <div className="cart-header">
            <h2>Your cart</h2>
            <Link className="shopBtn" to="/shop">
              Continue Shopping
            </Link>
          </div>
          <div className="cart-titles">
            <h2>PRODUCT</h2>
            <h2>QUANTITY</h2>
            <h2>TOTAL</h2>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="subTotal">
            <div className="total">
              <h2>Subtotal</h2>
              <span>
                {cartItems.reduce((total, cartItems) => {
                  const item = products.find((i) => i.id === cartItems.id);
                  return total + (item?.price || 0) * cartItems.quantity;
                }, 0)}
                $
              </span>
            </div>
            <p>Tax included and shipping calculated at checkout</p>
            <button className="checkout">Check out</button>
            <button className="paypal">
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                border="0"
                alt="PayPal Logo"
              />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
          className="cartContainer"
        >
          <div className="cart-header">
            <h2>Your cart is empty</h2>
            <Link className="shopBtn" to="/shop">
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
