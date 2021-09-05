import React from 'react'
import { Redirect, Route } from 'react-router'
import { getSessionStorage } from '../utils/storage'

function ProtectedRoute ({ component: Component, ...restOfProps }) {
  const isAuthenticated = getSessionStorage('alkemyToken')

  return (
    <Route
      { ...restOfProps }
      render={props => isAuthenticated ?
        <Component { ...props } /> :
        <Redirect to='/signin' />
      }
    >
    </Route>
  )
}

export default ProtectedRoute
