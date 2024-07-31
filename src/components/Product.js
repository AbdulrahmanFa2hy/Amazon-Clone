import React from "react";
import star from "../images/icons/star.png";
import "./Product.css";
import { useAuth } from "../context/GlobalContext";

const Product = ({ price, title, id, img, rating }) => {
  const { dispatch, basket } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      value: { price, title, id, img, rating },
      id: id,
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <div className="prodcut-title">{title}</div>
        <div className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img src={star} alt="star" key={i} />
            ))}
        </div>
      </div>

      <div className="product-img">
        <img src={img} alt={`prodcut-img-${id}`} />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
