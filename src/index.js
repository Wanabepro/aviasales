import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import App from './components/app'

const root = ReactDOM.createRoot(document.querySelector('.container'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
