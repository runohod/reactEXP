import './PageTitle.scss'

const PageTitle = ({ 
  className = '', 
  children

}) => {
  return (
    <h1 className={`todo__title ${className}`}>{children}</h1>
  );
};

export default PageTitle;
