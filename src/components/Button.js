import React from 'react';

const Button = ({ text, variant, size, action }) => {
  return (
      <button className={`btn btn-${variant} btn-${size}`} onClick={action}>{text}</button>
  );
};

export default Button;
