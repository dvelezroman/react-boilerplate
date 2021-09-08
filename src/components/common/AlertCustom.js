import React from 'react'

const AlertCustom = (props) => {
  return (
    <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
      <strong>{props.title}</strong> {props.msg}
      <button
        onClick={props.onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
      </button>
    </div>
  )
}

export default AlertCustom
