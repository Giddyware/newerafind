import { createContext } from 'react';

createContext();
export default createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  deleteProductFromCart: (productId) => {},
});
