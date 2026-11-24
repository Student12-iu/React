import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseState from './Usestate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseState />

  </StrictMode>,
)