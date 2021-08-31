import React from 'react'
import { render as ReactDOM } from 'react-dom'
import LoginFormik from './pages/LoginPage'
import configData from './config/development.env.json'

console.log(configData)

import './styles/index.scss'

const App = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <div className="header">
          <h1>Welcome to React application</h1>
        </div>
        <LoginFormik />
      </div>
    </React.StrictMode>
  )
}

ReactDOM(<App />, document.getElementById("root"))
