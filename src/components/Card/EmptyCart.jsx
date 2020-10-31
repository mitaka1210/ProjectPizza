import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/empty-cart.png';
function EmptyCart() {
  return (
    <div className='container container--cart'>
      <div className='cart cart--empty'>
        <h2>
          Cart is empty <i>😕</i>
        </h2>
        <p>
          You probably haven't ordered a pizza yet.
          <br />
          To order pizza, go to the main page..
        </p>
        <img src={img1} alt='Empty cart' />
        <Link to='/' className='button button--black'>
          <span>Go Back</span>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
