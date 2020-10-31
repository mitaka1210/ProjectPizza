import React from 'react';
import { useSelector } from 'react-redux';
import CartPage from '../components/Card/CartPage_1';
import EmptyCart from '../components/Card/EmptyCart';
function Card() {
  const { totalCount } = useSelector(({ card }) => card);

  return (
    <div className='content'>
      <div className='container container--cart'>{totalCount ? <CartPage /> : <EmptyCart />}</div>
    </div>
  );
}
export default Card;
