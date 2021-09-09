import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../..'
import CardSimple from '../../components/CardSimple'
// import searchResponse from '../../mockData/search.json'

const Home = () => {
  // const [data, setData] = useState([])
  const { filteredHeroes } = useContext(AppContext)

  const renderCards = () => {
    if (filteredHeroes.length) {
      return filteredHeroes.map(item => <CardSimple key={item.id} { ...item } />)
    }
    return (
      <h2>No results</h2>
    )
  }

  // useEffect(() => {
  //   setData(searchResponse.results)
  // }, [])

  return (
    <div className="row row-cols-4">
      {renderCards()}
    </div>
  )
}

export default Home
