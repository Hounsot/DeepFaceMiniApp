import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', disabled = false, onClick, children }) => {
  // Set up class names based on variant and disabled state
  const className = `A_Button ${variant} ${disabled ? 'disabled' : ''}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
