import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithProps from './components/basics/ComponentWithProps'

ReactDOM.render(
  <div> 
    <FirstComponent></FirstComponent>
    <ComponentWithProps
      name="Maju"
      animal="cat"
      >
    </ComponentWithProps>
    <ComponentWithProps
      name="Simbad"
      animal="dog"
      >
    </ComponentWithProps>
  </div>,  
  document.getElementById('root')
)