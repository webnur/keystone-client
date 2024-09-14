import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-tertiary text-primary px-4 py-1 rounded-lg mr-2 hover:bg-primary hover:text-tertiary ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
