import React, { useContext } from 'react';
import cartIcon from '../assets/cartIcon.png';
import CartContext from '../context/cart/CartContext';

import './Header.scss';

const Header = ({ onClick }) => {
  const { carts } = useContext(CartContext);

  return (
    <div className="header">
      <div className="left">
        <h1>NewEra find.</h1>
      </div>
      <div className="right">
        <h2>Shop</h2>
        <img onClick={onClick} src={cartIcon} alt="cart" />
        {carts.length > 0 && <sup>{carts.length}</sup>}
      </div>
    </div>
  );
};

export default Header;
