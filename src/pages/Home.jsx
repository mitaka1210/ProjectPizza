import React, { useEffect, useCallback } from 'react';
import { Categories, SortPopup, Pizza, LoadingPizza } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
import { addPizzaToCard } from '../redux/action/card';

const categoryName = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const sortItems = [
  { name: 'popular', type: 'popular', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'alphabet', type: 'name', order: 'asc' },
];
function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  const { isLoaded } = useSelector(({ pizzas }) => {
    return {
      isLoaded: pizzas.isLoaded,
    };
  });
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cardItems = useSelector(({ card }) => card.items);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCard = (obj) => {
    dispatch(addPizzaToCard(obj));
  };
  return (
    <section className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryName}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>All Pizzas</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <Pizza
                onClickAddPizza={handleAddPizzaToCard}
                addToCardCount={cardItems[obj.id] && cardItems[obj.id].items.length}
                key={`${obj}_${obj.id}`}
                {...obj}
              />
            ))
          : Array(10)
              .fill()
              .map((_, index) => <LoadingPizza key={index} />)}
      </div>
    </section>
  );
}

export default Home;
