import React, { useContext, useEffect, useState } from 'react';
import icon from '../assets/icon.png';
import CartContext from '../context/cart/CartContext';

import './SideDrawer.scss';

const SideDrawer = ({ isToggle, open }) => {
  const { addProductToCart, removeProductFromCart, carts } =
    useContext(CartContext);

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      carts.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [carts]);
  return (
    <div className={`sideDrawer ${isToggle ? 'expand' : 'shrink'}`}>
      <img src={icon} alt="toggle-drawer" className="icon" onClick={open} />
      <div className="my-cart">Your Cart</div>
      <div className="card">
        {carts.length === 0 && (
          <div style={{ fontWeight: 400 }}>
            {' '}
            There are no items in your cart.
          </div>
        )}
        {carts.map((prod) => (
          <div className="cartitem" key={prod.id}>
            <button
              className="close-icon"
              onClick={() => removeProductFromCart(prod.id)}
            >
              X
            </button>
            <div className="cartItemName">{prod.name}</div>
            <div className="cartItemImg">
              <img src={prod.img} alt={prod.name} />
            </div>
            <div className="quantity-section">
              <button
                className="btn"
                onClick={() => removeProductFromCart(prod.id)}
              >
                -
              </button>
              <span>{prod.quantity}</span>
              <button className="btn" onClick={() => addProductToCart(prod)}>
                +
              </button>
            </div>
            <div className="cartItemAmount">{`£${prod.price}`}</div>
            {/* <div >
                <select className="selection" name="vat">
                  <option value="10%">10%</option>
                  <option value="20%">20%</option>
                  <option value="30%">30%</option>
                </select>
              </div> */}
          </div>
        ))}
        
      </div>
      {carts.length !== 0 && (
          <>
            <hr />
            <div className="check-out-section">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>{total}</span>
              </div>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </>
        )}

      
    </div>
  );
};

export default SideDrawer;
