import { ADD_TO_CART, REMOVE_FROM_CART } from './CartTypes';

const addProductToCart = (state, product) => {
  let copy = [...state.carts];

  const curItemIndex = copy.findIndex((i) => i.product?.id === product.id);

  const productAlreadyExists = copy.find((item) => item.id === product.id);

  if (productAlreadyExists) {
    return {
      ...state,
      carts: copy.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    };
  }

  if (curItemIndex < 0) {
    copy.push({ ...product, quantity: 1 });
  }

  return { ...state, carts: copy };
};

const removeProductFromCart = (state, productId) => {
  const copy = [...state.carts];

  const curItemIndex = copy.findIndex((i) => i.id === productId);

  if (curItemIndex < 0) return { ...state };

  const curItem = { ...copy[curItemIndex] };
  curItem.quantity--;

  if (curItem.quantity <= 0) {
    copy.splice(curItemIndex, 1);
  } else {
    copy[curItemIndex] = curItem;
  }

  return { ...state, carts: copy };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return addProductToCart(state, action.payload);
    }
    case REMOVE_FROM_CART: {
      return removeProductFromCart(state, action.payload);
    }
    default:
      return state;
  }
};
export default CartReducer;
