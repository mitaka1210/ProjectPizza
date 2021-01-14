import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/ButtonAddPizza.jsx';

function Pizza({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addToCardCount }) {
  const typesNames = ['thin ', 'traditional'];
  const availableSizesPizza = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  console.log(activeType);
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const handleOnClickAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizesPizza[activeSize],
      type: typesNames[activeType],
    };
    onClickAddPizza(obj);
  };
  return (
    <section>
      <div className='pizza-block'>
                 <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
        <h4 className='pizza-block__title'>{name}</h4>
        <div className='pizza-block__selector'>
          <ul>
            {typesNames.map((type, index) => (
              <li
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}
                key={`${type}_ ${index}`}>
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {availableSizesPizza.map((size, index) => (
              <li
                onClick={() => onSelectSize(index)}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(size),
                })}
                key={`${size}_ ${index}`}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <Button onClick={handleOnClickAddPizza} className='button--add' outline>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Add</span>

            {addToCardCount && <i>{addToCardCount}</i>}
          </Button>
        </div>
      </div>
    </section>
  );
}

//! Проверяваме  какви са типовете на пропс.Това което прави typeScript.Той проверява в DB. И ако там нещо се смени хвърля грешка в конзолата на браузъра.
//?.arrayOf(PropTypes.number) - проверява да ли в масива има само числа и ако няма хвърля грешка.
Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClickAddPizza: PropTypes.func,
  addToCardCount: PropTypes.number,
};
//? Обеснявам  на компонента,че без тези данни неможе да живее и за даняма промеблеми да се хвърля грешка и приложенито да спре му задавам някакви начални (defaultProps) стойности за пропс.Това всичко ако нещо липсва  в DB.
Pizza.defaultProps = {
  types: [],
  size: [],
  price: 0,
  name: '----',
};
export default Pizza;
