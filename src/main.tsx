import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const config = {
  apiKey: import.meta.env.VITE_BENZINGA_API_KEY,
  baseUrl: import.meta.env.VITE_BENZINGA_API_BASE_URL,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
)
