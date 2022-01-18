import React from 'react';

import Products from '../Products/Products';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="mainHeading">All Products</div>
      <div className="otherText">A 360° look at NewEra find</div>
      <Products />
    </div>
  );
};

export default HomePage;
