import React, { useCallback, useEffect, useState } from 'react'
import { render as ReactDOM } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay-ts'

import LoginScreen from './pages/public/LoginScreen'
import Home from './pages/auth/Home'
import ProtectedRoute from './routing/ProtectedRoute'
import Header from './components/common/Header'

import configData from './config/development.env.json'

import './styles/index.scss'
import { getSessionStorage, removeSessionStorage } from './utils/storage'
import { wrapWithLoadingPause } from './utils/common'
import AlertCustom from './components/common/AlertCustom'
import About from './pages/auth/About'

export const AppContext = React.createContext(null)

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const handleLogout = () => {
    setLoading(true)
    wrapWithLoadingPause(() => {
      removeSessionStorage('alkemyToken')
      setIsAuthenticated(false)
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    setIsAuthenticated(!!getSessionStorage('alkemyToken'))
  }, [])

  return (
    <Router>
      <AppContext.Provider
        value={{
          configData,
          loading,
          setLoading,
          isAuthenticated,
          setIsAuthenticated,
          handleLogout,
          setAlert
        }}
      >
        <LoadingOverlay
          active={loading}
          spinner
          text='Loading...'
        >
          <div className="container">
            {alert && <AlertCustom { ...alert } onClose={() => setAlert(null)} />}
            <Header />
            <Route exact path="/signin" component={LoginScreen} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute exact path="/" component={Home} />

          </div>
        </LoadingOverlay>
      </AppContext.Provider>
    </Router>
  )
}

ReactDOM(<App />, document.getElementById("root"))
