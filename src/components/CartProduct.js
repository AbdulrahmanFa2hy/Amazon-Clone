import React from "react";
import starImage from "../images/icons/star.png";
import "./CartProduct.css";
import { useAuth } from "../context/GlobalContext";

const CartProduct = ({ img, title, price, rating, id }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={img} alt="cart-img" />
      </div>
      <div className="cart-prodcut-info">
        <h3 className="cart-product-title">{title}</h3>
        <h3 className="cart-product-price">${price}</h3>
        <p className="cart-product-star">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <img src={starImage} key={i} alt="star" />
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CartProduct;
