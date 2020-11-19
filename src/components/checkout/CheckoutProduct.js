import React from 'react';
import { UseStateValue } from '../../Provider/StateProvider';

import './CheckoutProduct.css'

const CheckoutProduct = ({ id, title, price, rating, image }) => {

  const [{basket}, dispatch] = UseStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return(
    <div id={id} className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {
            Array(rating).fill().map((_) => (
              <p> ⭐️ </p>
            ))
          }
        </div>
        <button onClick={removeFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;