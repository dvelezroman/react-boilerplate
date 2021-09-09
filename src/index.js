import React, { useCallback, useEffect, useState } from 'react'
import { render as ReactDOM } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay-ts'

import LoginScreen from './pages/public/LoginScreen'
import Home from './pages/auth/Home'
import ProtectedRoute from './routing/ProtectedRoute'
import Header from './components/Header'
import Detail from './pages/auth/Detail'
import AlertCustom from './components/common/AlertCustom'

import configData from './config/development.env.json'

import './styles/index.scss'
import { getSessionStorage, removeSessionStorage } from './utils/storage'
import { getUrl, wrapWithLoadingPause } from './utils/common'

export const AppContext = React.createContext(null)

const App = () => {
  const [heroes, setHeroes] = useState([])
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [searchString, setSearchString] = useState('')
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

  const doSearchHeroes = () => {
    const filtered = heroes.filter(heroe => heroe.name.toLowerCase().includes(searchString.toLowerCase()))
    setFilteredHeroes(filtered)
  }

  const getHeroesFromAPi = () => {
    const url = getUrl(`all.json`)

    fetch(url, {
      headers: {}
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        setAlert({
          type: "danger",
          title: "Error",
          msg: "Algo salio mal"
        })
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      setHeroes(data)
      setFilteredHeroes(data)
    }).catch((error) => {
      // HANDLE ERROR
      setAlert({
        type: "warning",
        title: "Aviso",
        msg: error.message
      })
    }).finally(() => {
      setLoading(false)
    });
  }

  useEffect(() => {
    setIsAuthenticated(!!getSessionStorage('alkemyToken'))
  }, [])

  useEffect(() => {
    getHeroesFromAPi()
  },[])

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
          setAlert,
          searchString,
          setSearchString,
          filteredHeroes,
          doSearchHeroes
        }}
      >
        <LoadingOverlay
          active={loading}
          spinner
          text='Loading...'
        >
          <div className="container">
            {alert && <AlertCustom { ...alert } onClose={() => setAlert(null)} />}
            <Header title="Challenge Demo" />
            <Route exact path="/signin" component={LoginScreen} />
            <ProtectedRoute exact path="/heroe/:id" component={Detail} />
            <ProtectedRoute exact path="/" component={Home} />
          </div>
        </LoadingOverlay>
      </AppContext.Provider>
    </Router>
  )
}

ReactDOM(<App />, document.getElementById("root"))
