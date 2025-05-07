import React from 'react';

const Button = ({ className, text }) => {
  return (
    <button className={`rounded-xl flex items-center justify-center ${className}`}>
      {text}
    </button>
  );
}

export default Button;
