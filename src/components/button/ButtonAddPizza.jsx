import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function ButtonAddPizza({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button-outline': outline,
      })}>
      {children}
    </button>
  );
}

ButtonAddPizza.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonAddPizza;
