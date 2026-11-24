import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import UseState from './UseState.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <UseState />
  </StrictMode>,
)
