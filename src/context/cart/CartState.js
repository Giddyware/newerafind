import { useReducer } from 'react';
import { shopItems } from '../../shopItems';

import CartContext from './CartContext';

import CartReducer from './CartReducer';
import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from './CartTypes';

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, { carts: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const deleteProductFromCart = (productId) => {
    dispatch({ type: DELETE_FROM_CART, payload: productId });
  };

  return (
    <CartContext.Provider
      value={{
        products: shopItems,
        carts: state.carts,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
