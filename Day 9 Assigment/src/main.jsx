import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {NavBar} from './NavuBar/NavBar'
ReactDOM.render(
  <React.StrictMode>
    <NavBar>
      <App />
    </NavBar>
  </React.StrictMode>,
  document.getElementById('root')
)
