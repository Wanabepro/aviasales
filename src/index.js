import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.scss'

import store from './store/store'
import App from './components/app'

const root = ReactDOM.createRoot(document.querySelector('.container'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
