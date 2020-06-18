import React, { useRef, useEffect } from "react";

const useOutsideHandler = (ref, handleClick) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick, ref]);
};

const OutsideClickHandler = (props) => {
  const { handleClickOutside, children, className } = props;
  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef, handleClickOutside);
  return <div className={className} ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;