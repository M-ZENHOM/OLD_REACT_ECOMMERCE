import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function ProductDetails() {
  const { increaseCartQuantity } = useShoppingCart();
  const apiAddress = "https://dummyjson.com/products";
  const [items, setItems] = useState([]);
  const [cartActive, setCartAtice] = useState(false);
  const params = useParams();
  useEffect(() => {
    fetch(`${apiAddress}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [params.productID]);

  const AddItemHandler = (id) => {
    increaseCartQuantity(id);
    setCartAtice(true);
  };

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
        className="details-box"
      >
        <img className="mainImg" src={items.thumbnail} alt={items.alt} />
        <div className="box-imgs"></div>
        <div className="box-body">
          <h3>{items.title}</h3>
          <p>{items.description}</p>
          <div className="box-footer">
            <span className="price">Price :{items.price}$</span>
            <span className="brand">Brand :{items.brand}</span>
            <span className="stock">Instock : {items.stock}</span>
            <span className="rating"> Rating :{items.rating}</span>
            <div className="item-rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <button
              onClick={() => {
                AddItemHandler(items.id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </motion.div>
      <div
        className={
          cartActive ? "cartItem-Container cartAdded" : "cartItem-Container"
        }
      >
        <i className="bi bi-x-lg" onClick={() => setCartAtice(false)}></i>
        <span>
          <i className="bi bi-check2"></i>Item added to your cart
        </span>
        <div className="item-detials">
          <img src={items.thumbnail} alt={items.alt} />
          <h3>{items.title}</h3>
        </div>
        <Link className="btn" to="/cart">
          View my cart
        </Link>
        <button className="btn btntwo">Check out</button>
        <Link className="btn-three" to="/shop">
          Continue shopping
        </Link>
      </div>
    </>
  );
}
