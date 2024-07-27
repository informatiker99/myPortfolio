import React from "react";
type Btn = {
  children?: any;
  onClick?: () => void;
  variant?: string;
  className?: string;
  type?: "submit" | "reset" | "button";
};
const Button = ({ children, onClick, variant, className, type }: Btn) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
