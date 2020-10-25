import React from 'react';
import { Categories, SortPopup, Pizza } from '../components';
function Home({ itemsShop }) {
  return (
    <section className='container'>
      <div className='content__top'>
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup menu={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {itemsShop.map((obj) => (
          <Pizza {...obj} key={`${obj}_${obj.id}`} />
        ))}
      </div>
    </section>
  );
}

export default Home;
