import { useState } from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "./context/ShoppingCartContext";

export default function Header() {
  const [closeNav, setCloseNav] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const { cartItems } = useShoppingCart();
  return (
    <header>
      <Nav />
      <div className="links-container">
        <div className="right-container">
          <div className="logo">
            <Link to="/">MAD STORE</Link>
          </div>
          <div
            className={closeNav ? "links menuAnimation" : "links"}
            onClick={() => setCloseNav(false)}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Our Products</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Find">Find store</NavLink>
          </div>
        </div>
        <button
          className={closeNav ? "burgers-btns active" : "burgers-btns"}
          onClick={() => setCloseNav(!closeNav)}
        >
          <span></span>
          <span></span>
        </button>
        <div className="icons">
          <div
            className={activeSearch ? "search-bar active-search" : "search-bar"}
          >
            <div className="input-container">
              <input type="text" placeholder="Enter KeyWords..." />
              <i className="bi bi-search" />
              <i
                className="bi bi-x-lg"
                onClick={() => setActiveSearch(!activeSearch)}
              />
            </div>
          </div>
          <i
            className="searchBtn bi bi-search"
            onClick={() => setActiveSearch(!activeSearch)}
          />
          <Link className="cartBtn" to="/Cart">
            <i className="bi bi-bag" />
            {cartItems.length > 0 && <span className="CartActive"></span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
