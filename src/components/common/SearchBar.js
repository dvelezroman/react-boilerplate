import React from 'react'

const SearchBar = (props) => {

  return (
    <div className="row g-3">
      <div className="col-9">
        <input
          onChange={e => props.onChange(e.target.value)}
          type="text"
          placeholder="Buscar Super Heroe"
          className="form-control"
          id="search"
        />
      </div>
      <div className="col-3">
        <button onClick={props.onClick} type="button" className="btn btn-primary mb-3">Buscar</button>
      </div>
    </div>

  )
}

export default SearchBar
