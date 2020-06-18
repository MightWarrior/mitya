import React from 'react';
import PropTypes from 'prop-types';

const Button = ({btnClassName, text, ...props  }) => {
  const className = `btn ${btnClassName}`;

  return (
      <button className={className} {...props}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  btnClassName: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Submit',
  btnClassName: '',
  type: '',
  disabled: false,
};

export default Button;

