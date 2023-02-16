import React, { useState } from "react";
import Slider from "../../Slider";
import img1 from "../../../imgs/bg-three.jpg";
import Heading from "../../Heading";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import DisplayCategory from "./DisplayCategory";

export default function AllProducts() {
  const [toggleList, setToggleList] = useState(false);
  const { products, getAllProducts, categories, getAllCategoryProducts } =
    useShoppingCart();
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
      className="allProducts"
    >
      <Slider
        img={img1}
        toBtn="/"
        btnTitle="Go Home"
        description="Welcome to our shop, I hope you like our products"
      />
      <Heading show="take a look" title="All Products" />
      <div className="catsContainer">
        <span onClick={() => setToggleList(!toggleList)}>
          <i className="bi bi-funnel-fill"></i>Filter with categories
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <ul className={toggleList ? "showList" : ""}>
          <li
            onClick={() => {
              getAllProducts();
              setToggleList(false);
            }}
          >
            All Products
          </li>
          <DisplayCategory
            categories={categories}
            getAllCategoryProducts={getAllCategoryProducts}
            setToggleList={setToggleList}
          />
        </ul>
      </div>
      <ProductCard Products={products} />
    </motion.div>
  );
}
