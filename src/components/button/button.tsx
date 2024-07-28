type Btn = {
  children?: any;
  onClick?: () => void;

  className?: string;
  type?: "submit" | "reset" | "button";
};
const Button = ({ children, onClick, className, type }: Btn) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
