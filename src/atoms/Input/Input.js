import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ placeholder = "Dummy", type = "text", refObj, width, disabled }) {
  return (
    <div style={{
      width: width
    }} className='input-container'>
      <input disabled={disabled} className="effect-8" ref={refObj} type={type} placeholder={placeholder} />
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  refObj: PropTypes.any,
  width: PropTypes.number,
  disabled: PropTypes.bool,
}

export default Input

