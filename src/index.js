import React from 'react'
import { render as ReactDOM } from 'react-dom'
import LoginFormik from './pages/LoginPage'

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
