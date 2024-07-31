import React, { useEffect } from "react";
import { useAuth } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import "./Payment.css";

const Payment = () => {
  useEffect(() => {}, []);
  const { basket, currentUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="payment">
      <div className="payment-header">
        <p>
          Checkout <Link to={"/cart"}>({basket.length} items)</Link>
        </p>
      </div>
      <div className="payment-address">
        <h2>Delivery Address</h2>
        <div className="payment-address-details">
          <p>
            {(currentUser && currentUser.email) || `Guest`}{" "}
            {!currentUser && (
              <small>
                <Link to={"/login"}> sign in</Link>
              </small>
            )}
          </p>
          <p>Cairo, Egypt</p>
        </div>
      </div>
      <hr />
      <div className="payment-review">
        <h2 className="payment-review-title">Review items and delivery</h2>
        <div className="paymet-review-products">
          {basket.map((e, i) => (
            <CartProduct
              title={e.title}
              id={e.id}
              key={Math.random() * 1000}
              price={e.price}
              rating={5}
              img={e.img}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="payment-method">
        <h2 className="payment-method-title">Payment Method</h2>
        <form className="payment-method-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input type="number" placeholder="Card number" />
            <input type="number" placeholder="MM/YY" />
            <input type="number" placeholder="CVC" />
          </div>
          <h2 className="payment-method-total">Order Total : $697</h2>
          <button type="submit" className="submit-btn">
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
