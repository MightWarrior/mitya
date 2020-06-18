import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import PropTypes, {string} from 'prop-types';

import CustomScrollbar from '../scrollbar';

const ReactSelect = (props) => {
  const {
    data,
    placeholder,
    value,
    label,
    onMenuOpen,
    onMenuClose,
    additionalClassName,
    isSearchable,
    hasError,
    onChange,
    errorMessage: error,
  } = props;

  const [errorMessage, setErrorMessage] = useState(error);
  const [isValid, setIsValid] = useState(!hasError);

  const controlClass = isValid ? 'form-control' : 'form-control has-error';

  const options = data.length ? data : '';

  const searchableClass = isSearchable ? 'is-searchable' : '';

  const selectClassName = `select ${searchableClass}`;

  const fieldClassName = `form-field ${ additionalClassName }`;

  const handleCloseMenuOnScroll = (e) => {
    const target = e.target;
    const scrollableElement = target.parentElement;

    return !(scrollableElement && (scrollableElement.classList.contains('react-select__menu')));
  };

  useEffect(() => {
    setErrorMessage(error);
    setIsValid(!hasError);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    setIsValid(!hasError);
  }, [hasError]);

  useEffect(() => {
    setIsValid(true);
  }, [value]);

  const renderSelectMenu = (data) => (
    <CustomScrollbar className="perfect-scrollbar react-select__menu-list">{data.children}</CustomScrollbar>
  );

  return (
    <>
      <div className={controlClass}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <div className={fieldClassName}>
          <Select
            className={selectClassName}
            selectProps={selectClassName}
            options={options}
            value={value}
            classNamePrefix="react-select"
            placeholder={placeholder || 'Select'}
            isOptionDisabled={(option) => option.disabled}
            isSearchable={isSearchable}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            menuPlacement="auto"
            closeMenuOnScroll={handleCloseMenuOnScroll}
            components={{MenuList: renderSelectMenu}}
            styles={{menuPortal: (base) => ({...base, zIndex: 9999})}}
            onMenuOpen={onMenuOpen}
            onMenuClose={onMenuClose}
            onChange={onChange}
            {...props}
          />
        </div>
        <span className="form-error">{errorMessage}</span>
      </div>
    </>
  );
};

ReactSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
      isFixed: PropTypes.bool,
    })
  ),
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

ReactSelect.defaultProps = {
  label: '',
  placeholder: 'Select value',
  data: [],
  isDisabled: false,
  isSearchable: false,
  hasError: false,
  errorMessage: '',
};

export default ReactSelect;
