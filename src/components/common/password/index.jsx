import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Password = (props) => {
  const {
    id, placeholder, disabled, label, errorMessage: message, onChangeValue
  } = props;
  const [errorMessage, setErrorMessage] = useState(message);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event) => {
    onChangeValue(event.target.value);
    setErrorMessage('');
  };

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? 'text' : 'password';

  const iconClassName = isPasswordVisible ? 'input-icon icon-visible' : 'input-icon icon-invisible';

  const controlClass = !errorMessage ? 'form-control' : 'form-control has-error';

  return (
    <div className={ controlClass }>
      { label &&
      <label className="form-label" htmlFor={ id }>
        { label }
      </label>
      }
      <div className="form-field">
        <span className={ iconClassName } onClick={ togglePasswordVisibility } />
        <input className="input"
           id={ id }
           name="input-password"
           placeholder={ placeholder }
           disabled={ disabled }
           type={ inputType }
           onChange={ handleChange }
        />
      </div>
      <div className="form-error">{ errorMessage }</div>
    </div>
  );
};

Password.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChangeValue: PropTypes.func,
};

Password.defaultProps = {
  id: '',
  placeholder: '',
  label: '',
  value: '',
  disabled: false,
  errorMessage: '',
  onChangeValue: () => {},
};


export default Password;
