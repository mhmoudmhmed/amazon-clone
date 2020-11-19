import React from "react";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from '../../Provider/StateProvider';
import { getBasketTotal } from '../../Provider/reducer';


import "./Subtotal.css";

const Subtotal = () => {

  const [{ basket }, dispatch] = UseStateValue();

  return(
    <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Procced to Checkout</button>
    </div>
  );
};

export default Subtotal;