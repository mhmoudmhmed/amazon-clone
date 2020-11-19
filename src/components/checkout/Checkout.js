import React from "react";
import { UseStateValue } from "../../Provider/StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';

import "./Checkout.css";

const Checkout = () => {

  const [ { basket }, dispatch ] = UseStateValue();

  return(
    <div className="checkout">

      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>

          {basket.length === 0 ? (
            <div>
              <h1> Your Baset is Empty</h1>
              <p> You have no items in your basket. To buy one or more items, click "Add to basket" button next to the item. </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your shopping Basket</h2>

              {basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          )}

        </div>
      </div>

      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}

    </div>
  )
}

export default Checkout;