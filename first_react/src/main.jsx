import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App1 } from './App.jsx'
import { App2 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1/>
    <App2/>
  </StrictMode>,
)
