import './Card.css'

import React from 'react'

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#6f6699",
    borderColor: props.color || "#6f6699"
  }

  return (
    <div className="card" style={cardStyle}>
      <div className="card-title"><h3>{props.titulo}</h3></div>
      <div className="card-content"> {props.children} </div>
    </div>
  )
}