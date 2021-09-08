import React, { useEffect, useState } from 'react'
import CardSimple from '../../components/CardSimple'
import searchResponse from '../../mockData/search.json'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(searchResponse.results)
  }, [])
  
  const renderCards = () => {
    if (data.length) {
      return data.map(item => <CardSimple key={item.id} { ...item } />)
    }
    return (
      <h2>No results</h2>
    )
  }

  return (
    <div className="row row-cols-4">
      {renderCards()}
    </div>
  )
}

export default Home
