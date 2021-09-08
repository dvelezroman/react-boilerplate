import React from 'react'

export default function Button (props) {
  return (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={props.onClick || null}
    >
      {props.title}
    </button>
  )
}