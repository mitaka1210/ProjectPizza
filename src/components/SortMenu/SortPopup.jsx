import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//TODO: дългия запис на ref={sortRef} това е:
//ref={(elem) => {
//	sortRef.current = elem;
// }}
const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [showPopup, setShowPopup] = useState(false);

  //! Запазва точния път по дом дървото в този случай това е className=sort.
  const sortRef = useRef();
  const toggle = () => {
    setShowPopup(!showPopup);
  };
  //? Тук проверяваме къде цъкаме по страницата. Ако сме кликнали на падащите менюта те се показват. Но ако сме някъде другаде те ще се скриват сами. Защото e.path.includes(sortRef.current) проверява къде кликаме по страницата ако пътя съвпадне показва падащато меню иначе го скрива.
  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setShowPopup(false);
    }
  };
  //! Зада може да се сменят менютата който падата създаме променлива и в нея записваме стойностите от който се държат в props.menu = имената на падащаите менюта и те започват да се сменят.

  const activeMenuName = items.find((obj) => obj.type === activeSortType).name;
  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }

    setShowPopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <svg
          className={showPopup ? 'rotated' : ''}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Sort By:</b>
        <span onClick={toggle}>{activeMenuName}</span>
      </div>
      {showPopup && (
        <div className='sort__popup'>
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeSortType === obj.type ? 'active' : ''}
                  onClick={() => onSelectItem(obj)}
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
            ;
          </ul>
        </div>
      )}
    </div>
  );
});

//! Проверяваме  какви са типовете на пропс.Това което прави typeScript.Той проверява в DB. И ако там нещо се смени хвърля грешка в конзолата на браузъра.
//?.arrayOf(PropTypes.number) - проверява да ли в масива има само числа и ако няма хвърля грешка.
SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};
////? Обеснявам  на компонента,че без тези данни неможе да живее и за даняма промеблеми да се хвърля грешка и приложенито да спре му задавам някакви начални (defaultProps) стойности за пропс.Това всичко ако нещо липсва  в DB.
SortPopup.defaultProps = { items: [] };
export default SortPopup;
