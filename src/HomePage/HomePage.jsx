import React from 'react';
// import { CartState } from '../context/GlobalState';
import Products from '../Products/Products';
import './HomePage.scss';

const HomePage = () => {
  // const { state} = CartState();

  // console.log(state)

  return (
    <div className="homePage">
      <h2>All Products</h2>
      <span>A 360° look at NewEra find</span>
      <Products />
    </div>
  );
};

export default HomePage;
