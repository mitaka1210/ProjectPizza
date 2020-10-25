import React, { useState } from 'react';

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  //const [btcolor, setColor] = useState(false);
  //const toggle = () => {
  //  setColor(!btcolor);
  //};
  return (
    <main className='categories'>
      {/*<button className={btcolor ? 'bgr' : ''} onClick={toggle}>
        hi
      </button>*/}
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((e, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${e}_${index}`}>
              {e}
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Categories;
