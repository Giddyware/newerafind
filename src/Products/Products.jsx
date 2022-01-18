import React from 'react';

import { shopItems } from '../shopItems';
import SingleProduct from '../SingleProduct/SingleProduct';

import './Products.scss';

const Products = () => {
  return (
    <div className="products">
      {shopItems.map((shopItem) => (
        <SingleProduct key={shopItem.id} product={shopItem} />
      ))}
    </div>
  );
};

export default Products;
