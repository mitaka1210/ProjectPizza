import React from 'react';
import img1 from '../components/assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
function Card1() {
  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart cart--empty'>
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={img1} alt='Empty cart' />
          <Link to='/' className='button button--black'>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card1;
