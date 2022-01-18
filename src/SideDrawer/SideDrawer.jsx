import React, { useContext, useEffect, useState } from 'react';
import icon from '../assets/icon.png';
import CartContext from '../context/cart/CartContext';

import './SideDrawer.scss';

const SideDrawer = ({ isToggle, onClick }) => {
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
      <div className="">
        <img src={icon} alt="cart" className="icon" onClick={onClick} />
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
              {/* <img className="cartItemImg" src={prod.img} alt={prod.name} />
              <div className="cartItemDetail">
                <span className="cartItemName">{prod.name}</span>
                <span className="cartItemAmount">{prod.price}</span>
              </div> */}
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
                <div className="cartItemAmount">{`£${prod.price}`}</div>
              </div>
              {/* <div >
                <select className="selection" name="vat">
                  <option value="10%">10%</option>
                  <option value="20%">20%</option>
                  <option value="30%">30%</option>
                </select>
              </div> */}
            </div>
          ))}
          {carts.length !== 0 && <div className="total">Total:{total}</div>}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
