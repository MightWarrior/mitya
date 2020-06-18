import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    id,
    placeholder,
    disabled,
    label,
    type,
    name,
    additionalClassName,
    onChangeValue,
    errorMessage: message,
    maxLength,
  } = props;
  const [inputType] = useState(type);
  const [errorMessage, setErrorMessage] = useState(message);

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);

  const handleChange = (event) => {
    onChangeValue(event.target.value);
    setErrorMessage('');
  };

  const controlClass = !errorMessage ? 'form-control' : 'form-control has-error';
  const fieldClassName = `form-field ${ additionalClassName }`;

  return (
    <div className={ controlClass }>
      { label &&
      <label className="form-label" htmlFor={ id }>
        { label }
      </label>
      }
      <div className={ fieldClassName }>
        <input className="input"
               id={ id }
               name={ name }
               type={ inputType }
               placeholder={ placeholder }
               disabled={ disabled }
               onChange={ handleChange }
               maxLength={ maxLength }
        />
      </div>
      <div className="form-error">{ errorMessage }</div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  additionalClassName: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
  onChangeValue: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  placeholder: '',
  additionalClassName: '',
  label: '',
  value: '',
  name: 'input-form',
  type: 'text',
  disabled: false,
  maxLength: 129,
  errorMessage: '',
  onChangeValue: () => {},
};


export default Input;

