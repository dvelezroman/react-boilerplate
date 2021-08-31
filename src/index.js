import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'

const HelloWorldReact = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to React application</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<HelloWorldReact />, document.getElementById("root"))
