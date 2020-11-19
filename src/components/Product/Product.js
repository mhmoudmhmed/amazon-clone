import React from 'react';
import { UseStateValue } from '../../Provider/StateProvider';

import './Product.css';

const Product = ({ id, title, price, rating, image }) => {

  const [ state , dispatch] = UseStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    })
  }

  return(
    <div className="product">
      <div className="product_info">
        <p> {title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating).fill().map((_) => (
              <p> ⭐️ </p>
            ))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;