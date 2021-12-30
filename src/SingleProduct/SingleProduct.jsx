import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

import './SingleProduct.scss';

const SingleProduct = ({ product }) => {
  const { addToCart, removeItem, cartItems } = useContext(CartContext);

  return (
    <div className="card">
      <div className="top">
        <img src={product.img} alt={`image ${product.id}`} />
      </div>
      <div className="down">
        <li>{product.name}</li>
        <h4>{product.price}</h4>
      </div>
      {cartItems.some((p) => p.id === product.id) ? (
        <button onClick={() => removeItem(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default SingleProduct;
