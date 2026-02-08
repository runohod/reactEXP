import SearchIcon from '../Icons/SearchIcon'
import './SearchField.scss'

const SearchField = ({ 
  placeholder = 'Search note...', 
  value, 
  onChange, 
  className = '', 
  iconColor = '' 

}) => {
  return (
    <div className={`field__search-wrapper ${className}`}>
      <input 
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

      
      