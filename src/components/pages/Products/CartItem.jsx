import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
const CartItem = ({ id, quantity }) => {
  const {
    getItemsQuantity,
    removeItemFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    products,
  } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="cartItem">
      <div className="cart-body">
        <img src={item.thumbnail} alt={item.alt} />
        <div className="details">
          <span>{item.title}</span>
          <span>{item.price}$</span>
        </div>
      </div>
      <div className="q-c">
        <div className="cart-quantity">
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <div className="quantity">{getItemsQuantity(id)}</div>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
        </div>
        <i className="bi bi-x-lg" onClick={() => removeItemFromCart(id)}></i>
      </div>
      <div className="total-price">{item.price * quantity}$</div>
    </div>
  );
};

export default CartItem;
