import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'



import './index.css'
import { WolvesApp } from './WolvesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WolvesApp />
    </BrowserRouter>
  </React.StrictMode>
)
