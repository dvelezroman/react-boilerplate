import React, { useState } from 'react'
import { render as ReactDOM } from 'react-dom'
import LoadingOverlay from 'react-loading-overlay-ts'

import LoginScreen from './pages/LoginScreen'
import configData from './config/development.env.json'

import './styles/index.scss'

export const AppContext = React.createContext(null)

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <AppContext.Provider value={{ configData, loading: false, setLoading }}>
        <LoadingOverlay
          active={loading}
          spinner
          text='Loading...'
        >
          <div className="container">
            <div className="header">
              <h1>Welcome to React application</h1>
            </div>
            <LoginScreen />
          </div>
        </LoadingOverlay>
      </AppContext.Provider>
    </>
  )
}

ReactDOM(<App />, document.getElementById("root"))
