import { useEffect, useRef } from 'react';
import SearchIcon from '../Icons/SearchIcon'
import './SearchField.scss'

const SearchField = ({ 
  placeholder = 'Search note...', 
  value, 
  onChange, 
  className = '', 
  iconColor = '',
  ...otherProps

}) => {

  const inputRef = useRef(null);

useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
}, []);

  return (
    <div className={`field__search-wrapper ${className}`} {...otherProps}>
      <input 
        ref={inputRef}
        type="text"
        className="field__input" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
        <SearchIcon className="field__search-icon" color={iconColor} />
    </div>
  );
};

export default SearchField;

      
      