import React from "react";
import "./Cart.css";
import addImage from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
// import Subtotal from "./Subtotal";
const Cart = () => {
  const navigate = useNavigate();
  const { currentUser, basket } = useAuth();
  return (
    <div className="shoping-cart">
      <div className="container">
        <div className="left-side">
          <div className="left-side-img">
            <img src={addImage} alt="img" />
          </div>
          <h3>Hello {(currentUser && currentUser.email) || "Guest"}</h3>
          <h2 className="shoping-cart-title">Your shopping Basket</h2>
          <hr />
          {basket.length > 0 ? (
            basket.map((e) => {
              return (
                <CartProduct
                  key={Math.random() * 1000}
                  title={e.title}
                  img={e.img}
                  price={e.price}
                  id={e.id}
                  rating={5}
                />
              );
            })
          ) : (
            <h2 className="alert-empty-basket" onClick={() => navigate("/")}>
              Add items to the basket!
            </h2>
          )}
        </div>
        <div className="right-side">
          {/* <Subtotal /> */}
          <p>
            Subtotal ({basket.length} items): <strong>$0</strong>
          </p>
          <div className="gift-checkbox">
            <input type="checkbox" name="gift" id="gift" />
            <label htmlFor="gift">This order contains a gift</label>
          </div>
          <Link to={"/payment"}>Procced to Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
