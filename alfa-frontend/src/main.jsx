import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { EnquiryProvider } from './context/EnquiryContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <EnquiryProvider>
      <App />
    </EnquiryProvider>
  </StrictMode>,
)