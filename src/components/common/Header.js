import React, { useContext } from 'react'
import { AppContext } from '../..'
import { removeSessionStorage } from '../../utils/storage'
import Button from './Button'
import SearchBar from './SearchBar'

export default function Header() {
  const { handleLogout, isAuthenticated } = useContext(AppContext)

  const showTitle = <h2 className="text-white">Header Title</h2>
  const showSearchBar = <SearchBar />

  return (
    <div className="header">
      <div className="row">
        <div className="col-10">
          {isAuthenticated ?
            showSearchBar :
            showTitle
          }
        </div>
        <div className="col-2">
          {isAuthenticated && <Button title='Logout' onClick={handleLogout} />}
        </div>
      </div>
    </div>
  )
}