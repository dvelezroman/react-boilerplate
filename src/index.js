import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorldReact = () => {
  return (
    <h1>
      Hello World from ReactJS!!
    </h1>
  )
}

ReactDOM.render(<HelloWorldReact />, document.getElementById("root"))
