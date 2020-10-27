import React, { useEffect, useCallback } from 'react';
import { Categories, SortPopup, Pizza, LoadingPizza } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';
const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
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

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
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
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => <Pizza {...obj} isLoaded={true} key={`${obj}_${obj.id}`} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingPizza key={index} />)}
      </div>
    </section>
  );
}

export default Home;
