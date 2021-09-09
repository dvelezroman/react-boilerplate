import React, { useContext } from 'react'
import { AppContext } from '..'
import Button from './common/Button'
import SearchBar from './common/SearchBar'

export default function Header(props) {
  const {
    handleLogout,
    isAuthenticated,
    setSearchString,
    doSearchHeroes
  } = useContext(AppContext)

  const showTitle = <h2 className="text-white">{props.title}</h2>
  const showSearchBar = <SearchBar onChange={setSearchString} onClick={doSearchHeroes} />

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