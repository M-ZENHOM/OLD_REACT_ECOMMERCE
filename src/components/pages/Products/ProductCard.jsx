import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ Products }) => {
  const navigate = useNavigate();
  const ClickHandler = (id) => {
    navigate(`/product/${id}`);
    window.scroll(0, 0);
  };
  return (
    <div className="container">
      {Products?.map((item) => (
        <div className="productCard" key={item.id}>
          <img
            className="thumbnail-img"
            src={item.thumbnail}
            alt={item.title}
          />
          <button className="detailsBtn" onClick={() => ClickHandler(item.id)}>
            Details
          </button>
          <div className="productCard-images">
            <img src={item.images[0]} alt="" />
            <img src={item.images[1]} alt="" />
            <img src={item.images[2]} alt="" />
          </div>
          <div className="productCard-body">
            <h5 className="productCard-title">{item.title}</h5>
            <p className="productCard-price">{item.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
