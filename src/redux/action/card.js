const addPizzCard = 'ADD_PIZZA_CARD';
const clearCart = 'CLEAR_CART';
const removeCartItem = 'REMOVE_CART_ITEM';
const onClickPlusCart = 'PLUS_CART_ITEM';
const onClickMinusCart = 'MINUS_CART_ITEM';
//?====================================================
export const addPizzaToCard = (pizzaObj) => ({
  type: addPizzCard,
  payload: pizzaObj,
});
//?====================================================
export const clearAllCart = () => ({
  type: clearCart,
});
//?====================================================
export const removePizza = (id) => ({
  type: removeCartItem,
  payload: id,
});
//?====================================================
export const plusCartItem = (id) => ({
  type: onClickPlusCart,
  payload: id,
});
//?====================================================
export const minusCartItem = (id) => ({
  type: onClickMinusCart,
  payload: id,
});
