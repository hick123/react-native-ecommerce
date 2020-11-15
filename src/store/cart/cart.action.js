import * as types from './cart.types';

export const addProductAction = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});
export const loadCartAction = (cart_items) => ({
  type: types.LOAD_CART,
  payload: cart_items,
});
export const removeProductAction = (product) => ({
  type: types.REMOVE_FROM_CART,
  payload: product,
});

export const changeProductCount = (product) => ({
  type: types.CHANGE_PRODUCT_QUANTITY,
  payload: product,
});
export const increaseProductCount = (quantity) => ({
  type: types.INCREASE_PRODUCT_QUANTITY,
  payload: quantity,
});
export const decreaseProductCount = (quantity) => ({
  type: types.DECREASE_PRODUCT_QUANTITY,
  payload: quantity,
});

export const clearCartAction = () => ({
  type: types.CLEAR_CART,
});

export const updateCart = (cart_items) => (dispatch) => {
  let productQuantity = cart_items.reduce((sum, product) => {
    sum += product.quantity;
    return sum;
  }, 0);

  let totalPrice = cart_items.reduce((sum, product) => {
    sum += parseInt(product.price, 10) * product.quantity;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice,
    currencyId: 'KSH',
    currencyFormat: 'KSH',
  };
  dispatch({
    type: types.UPDATE_CART,
    payload: cartTotal,
  });
};
