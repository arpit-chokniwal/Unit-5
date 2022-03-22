import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import {Provider as ReactProvider} from 'react-redux'
import { store } from './Redux/store'

ReactDOM.render(
  <React.StrictMode >
  <BrowserRouter>
  <ReactProvider store={store}>
    <App />
    </ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
