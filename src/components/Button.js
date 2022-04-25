import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, text, onClick, showAdd}) => {
  return (
    <button className='btn' onClick = {onClick} style={{ backgroundColor : color }}> { showAdd ? 'Close' : text } </button>
  )
}

Button.defaultProps = {
    color : 'steelblue',
}

Button.protoTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
    onClick: PropTypes.func
}

export default Button;