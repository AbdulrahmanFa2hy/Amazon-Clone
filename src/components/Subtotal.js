import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalContext";
import { getBasketTotal } from "../context/AppReducer";
const Subtotal = () => {
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>;
        }}
        value={getBasketTotal(basket)}
        displayType="text"
        decimalScale={2}
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
};

export default Subtotal;
