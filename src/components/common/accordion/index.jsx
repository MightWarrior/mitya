import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, children, isAccordionOpen, disabled }) => {
  const [isOpen, setOpen] = useState(isAccordionOpen);
  return (
    <div className={ `accordion ${ isOpen ? "open" : "collapsed" } ${ disabled ? "disabled" : "" }` }>
      <div
        className="accordion-title"
        onClick={ () => setOpen(!isOpen) }
      >
        { title }
        <span className="accordion-arrow icon-arrow-top" />
      </div>
      <div className="accordion-item">
        <div className="accordion-content">{ children }</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isAccordionOpen: PropTypes.bool,
  disabled: PropTypes.bool,
};

Accordion.defaultProps = {
  title: '',
  children: '',
  disabled: false,
  isAccordionOpen: false,
};

export default Accordion;
