const addPizzCard = 'ADD_PIZZA_CARD';
const clearCart = 'CLEAR_CART';
const removeCartItem = 'REMOVE_CART_ITEM';
const onClickPlusCart = 'PLUS_CART_ITEM';
const onClickMinusCart = 'MINUS_CART_ITEM';
//?====================================================
const initialState = {
  items: {}, //! вземаме всичко за дадената пица което е един обект с данни за нея цена,размер,вид и след това ще ги добавяме по id в кошницата само тези който си е избрал ползвателя.Например избирам Пиперони 26см. традиционна в  количката се добавя нейното ID и цена след това друга и пак се добавя ID и цените се натрупват(събират една с друга) и така ще се покзва броя на пиците който съм избрал и колко е ми струват.
  totalPrice: 0, //!брой пици
  totalCount: 0, //! сумата на всички пици в количката
};
//?====================================================

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};
function Card(state = initialState, action) {
  switch (action.type) {
    case addPizzCard: {
      //Разеснявам редовете: Ако лиспсва итема с такова id създай в item един масив в който има един обект.Но ако го има id тогава създай такъв масив като първо вземеш всички стари значения и накрая добави новия обект
      //[...state.items[action.payload.id].items - това означава мини по целия масив
      const currentIdPizzaItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentIdPizzaItem,
          totalPrice: getTotalPrice(currentIdPizzaItem),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      //const items = Object.values(newItems).map((obj) => obj.items);
      //const allPizzas = [].concat.apply([], items);
      //const totalPrice = getTotalPrice(allPizzas);

      return {
        //TODO: Вземаме стария state следтова items създаваме нов обект след това id което ние е подадено от това коя пица сме избрали(всяка пица си има собствено id) след това вземаме стария масив с пици и тяхните  id и създаваме нов масив от старите обекти(това са пиците и тяхните свойства(цена,размет ...) и към тях накрая добавяме новото id  на новата пица която е билата избрана) избирам пица с id=2 в количката се добавя след това пица с id=3 в количката се добавя също и тя и така докато не се завърши поръчката.За да може да не толкова трудно за четене се използва библиотека(YARN ADD IMMER  --SAVE)

        ...state,
        items: newItems,
        totalCount,
        //totalCount: allPizzas.length, //? Получаваме масив
        totalPrice,
      };
    }
    case clearCart:
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    case removeCartItem: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case onClickPlusCart: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case onClickMinusCart: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
}

export default Card;
//totalPizzaPriceInCart = totalPrice;
