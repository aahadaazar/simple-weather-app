import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onClickFunc, text = "Dummy", style, disabled }) {
  return (
    <div style={style} onClick={onClickFunc} className={`button${disabled ? ' disabled' : ''}`} id="button-4">
      <div id="underline"></div>
      {text}
    </div>
  )
}

Button.propTypes = {
  getCoordLocation: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
}

export default Button;

