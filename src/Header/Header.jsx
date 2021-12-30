import React, { useContext } from 'react';
import cartIcon from '../assets/cartIcon.png';
import CartContext from '../context/cart/CartContext';

import './Header.scss';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="header">
      <div className="left">
        <h1>NewEra find.</h1>
      </div>
      <div className="right">
        <h2>Shop</h2>
        <img
          src={cartIcon}
          alt="cart"
          onClick={() => {
            {
              cartItems.map((p) => (
                <div className="cart">
                 <img src={p.img} alt='Item Image'/>
                  {p.name}
                 
                </div>
              ));
            }
          }}
        />
        {cartItems.length > 0 && <sup>{cartItems.length}</sup>}
      </div>
    </div>
  );
};

export default Header;
