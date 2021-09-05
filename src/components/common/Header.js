import React, { useContext } from 'react'
import { AppContext } from '../..'
import { removeSessionStorage } from '../../utils/storage'
import Button from './Button'

export default function Header() {
  const { handleLogout } = useContext(AppContext)

  const { isAuthenticated } = useContext(AppContext)

  return (
    <div className="header">
      <div className="row">
        <div className="col-9">
          <h1>Header Title</h1>
        </div>
        <div className="col-3">
          {isAuthenticated && <Button title='Logout' onClick={handleLogout} />}
        </div>
      </div>
    </div>
  )
}