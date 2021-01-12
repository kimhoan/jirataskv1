import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      // src="/static/logo.svg"
      src="/static/images/products/product_7.jpeg"
      width={42}
      height={43}
      {...props}
    />
  );
};

export default Logo;
