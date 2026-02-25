import './styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import { ThemeContextProvider } from './ui/context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  </StrictMode>,
)