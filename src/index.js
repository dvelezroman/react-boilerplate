import React, { useCallback, useEffect, useState } from 'react'
import { render as ReactDOM } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay-ts'

import LoginScreen from './pages/public/LoginScreen'
import Home from './pages/public/Home'
import ProtectedRoute from './routing/ProtectedRoute'
import Header from './components/common/Header'

import configData from './config/development.env.json'

import './styles/index.scss'
import { getSessionStorage, removeSessionStorage } from './utils/storage'
import { wrapWithLoadingPause } from './utils/common'

export const AppContext = React.createContext(null)

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

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
    <BrowserRouter>
      <AppContext.Provider
        value={{
          configData,
          loading,
          setLoading,
          isAuthenticated,
          setIsAuthenticated,
          handleLogout
        }}
      >
        <LoadingOverlay
          active={loading}
          spinner
          text='Loading...'
        >
          <div className="container">
            <Header />
            <Route exact path="/signin" component={LoginScreen} />
            <ProtectedRoute exact path="/" component={Home} />

          </div>
        </LoadingOverlay>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM(<App />, document.getElementById("root"))
