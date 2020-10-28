const addPizzCard = 'ADD_PIZZA_CARD';
export const addPizzaToCard = (pizzaObj) => ({
  type: addPizzCard,
  payload: pizzaObj,
});
