import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

import './SingleProduct.scss';

const SingleProduct = ({ product }) => {
  const { addProductToCart, removeProductFromCart, carts } =
    useContext(CartContext);

  return (
    <div className="card">
      <div className="image-holder">
        <img src={product.img} alt={`image ${product.id}`} />
      </div>
      <>
        <div className="product-name">
          <li>{product.name}</li>
        </div>
        <div className="product-price">
          <h4>{product.price}</h4>
        </div>

        <div className="btns">
          {carts.some((p) => p.id === product.id) ? (
            <button
              className="btn"
              onClick={() => removeProductFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button className="btn" onClick={() => addProductToCart(product)}>
              Add to Cart
            </button>
          )}
        </div>
      </>
    </div>
  );
};

export default SingleProduct;
