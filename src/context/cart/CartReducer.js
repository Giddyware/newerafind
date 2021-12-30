import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_HIDE_CART } from './CartTypes';

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return { ...state, showCart: !state.showCart };
    }
    case ADD_TO_CART: {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
export default CartReducer;