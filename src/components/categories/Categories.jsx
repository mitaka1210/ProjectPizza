import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { FaBars, FaTimes } from 'react-icons/fa';

import { Navg } from './Element';
const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
  className,
  hambur,
}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  const handleClick = () => setClick(!click);
  //const [btcolor, setColor] = useState(false);
  //const toggle = () => {
  //  setColor(!btcolor);
  //};
  return (
    <main className='categories'>
      {/*<button className={btcolor ? 'bgr' : ''} onClick={toggle}>
        hi
      </button>*/}
      <div className='MobileIcon ' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <Navg onClick={handleClick} click={click}>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          All
        </li>

        {items &&
          items.map((e, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${e}_${index}`}>
              {e}
            </li>
          ))}
      </Navg>
    </main>
  );
});

//! Проверяваме  какви са типовете на пропс.Това което прави typeScript.Той проверява в DB. И ако там нещо се смени хвърля грешка в конзолата на браузъра.
//?.arrayOf(PropTypes.number) - проверява да ли в масива има само числа и ако няма хвърля грешка.
Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};
////? Обеснявам  на компонента,че без тези данни неможе да живее и за даняма промеблеми да се хвърля грешка и приложенито да спре му задавам някакви начални (defaultProps) стойности за пропс.Това всичко ако нещо липсва  в DB.
Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
