import React from 'react'

export default function(props) {
  const noise = props.animal === 'cat'? 'meow' : 'woof'
  return (
    <div>
      <p> 
        <strong>{ props.name } </strong>
        is a 
        <strong> { props.animal } </strong>
        so he/she says
        <strong> {noise}.</strong>
      </p>
    </div>
  )
}