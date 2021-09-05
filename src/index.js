import React, { useState } from 'react'
import { render as ReactDOM } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay-ts'

import LoginScreen from './pages/public/LoginScreen'
import Home from './pages/public/Home'

import configData from './config/development.env.json'

import './styles/index.scss'
import ProtectedRoute from './routing/ProtectedRoute'

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
            <BrowserRouter>
              <Route exact path="/signin" component={LoginScreen} />
              <ProtectedRoute exact path="/" component={Home} />
            </BrowserRouter>
          </div>
        </LoadingOverlay>
      </AppContext.Provider>
    </>
  )
}

ReactDOM(<App />, document.getElementById("root"))
