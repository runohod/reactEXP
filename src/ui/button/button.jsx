import styles from './Button.module.scss';

const Button = ({ children, onClick, className = '', iconColor=''}) => {
  return (
    <button className={`${styles.customButton} ${className}`} onClick={onClick} style={{ '--hover-color': iconColor }}>
      {children}
    </button>
  );
};

export default Button;