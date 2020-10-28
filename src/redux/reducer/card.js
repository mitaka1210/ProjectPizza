const addPizzCard = 'ADD_PIZZA_CARD';

//?====================================================
const initialState = {
  items: {}, //! вземаме всичко за дадената пица което е един обект с данни за нея цена,размер,вид и след това ще ги добавяме по id в кошницата само тези който си е избрал ползвателя.Например избирам Пиперони 26см. традиционна в  количката се добавя нейното ID и цена след това друга и пак се добавя ID и цените се натрупват(събират една с друга) и така ще се покзва броя на пиците който съм избрал и колко е ми струват.
  totalPrice: 0, //!брой пици
  totalCount: 0, //! сумата на всички пици в количката
};
//?====================================================
function Card(state = initialState, action) {
  switch (action.type) {
    case addPizzCard: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        //TODO: Вземаме стария state следтова items създаваме нов обект след това id което ние е подадено от това коя пица сме избрали(всяка пица си има собствено id) след това вземаме стария масив с пици и тяхните  id и създаваме нов масив от старите обекти(това са пиците и тяхните свойства(цена,размет ...) и към тях накрая добавяме новото id  на новата пица която е билата избрана) избирам пица с id=2 в количката се добавя след това пица с id=3 в количката се добавя също и тя и така докато не се завърши поръчката.За да може да не толкова трудно за четене се използва библиотека(YARN ADD IMMER  --SAVE)

        ...state,
        items: newItems,
        totalCount: allPizzas.length, //? Получаваме масив
        totalPrice: totalPrice,
      };
    }
    default:
      return state;
  }
}

export default Card;
