import './Card.css'

import React from 'react'

export default (props) => {
  return (
    <div className="card">
      <div className="card-title"><h3>{props.titulo}</h3></div>
      <div className="card-content"> {props.children} </div>
    </div>
  )
}