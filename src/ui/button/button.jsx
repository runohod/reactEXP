import './Button.scss';

const Button = ({ children, onClick, className = '', iconColor=''}) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} style={{ '--hover-color': iconColor }}>
      {children}
    </button>
  );
};

export default Button;