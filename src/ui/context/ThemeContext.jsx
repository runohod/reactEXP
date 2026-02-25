import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = (event) => {
    event.preventDefault();
    setIsLightTheme((prev) => !prev);
  };

useEffect(() => {
  document.documentElement.setAttribute('data-theme', isLightTheme ? 'dark' : 'light');
}, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};