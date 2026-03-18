import { useEffect, useRef } from 'react';
import SearchIcon from '../../icons/searchIcon'
import styles from './searchField.module.scss'

const SearchField = ({ 
  placeholder = 'Search note...', 
  value, 
  onChange, 
  className = '', 
  ...otherProps

}) => {

  const inputRef = useRef(null);

useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
}, []);

  return (
    <div className={`${styles.field__searchWrapper} ${className}`} {...otherProps}>
      <input 
        ref={inputRef}
        type="text"
        className={styles.field__input}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
        <SearchIcon className={styles.field__searchIcon} />
    </div>
  );
};

export default SearchField;

      
      