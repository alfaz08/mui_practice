import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SiteTheme from './utils/SiteTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteTheme>
    <App />
    </SiteTheme>
  </React.StrictMode>,
)
