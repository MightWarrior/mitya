import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

const CustomScrollbar = (props) => {
  const { children, ...restProps } = props;

  return (
    <PerfectScrollbar
      options={{
        suppressScrollX: true,
      }}
      {...restProps}
    >
      {children}
    </PerfectScrollbar>
  );
};

export default CustomScrollbar;
