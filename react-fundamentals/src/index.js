import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithProps from './components/basics/ComponentWithProps'
import FragmentComponent from './components/basics/FragmentComponent'

ReactDOM.render( 
    <div>
        <FirstComponent></FirstComponent>
        <ComponentWithProps 
            name = "Maju"
            animal = "cat" >
        </ComponentWithProps> 
        <ComponentWithProps 
            name = "Simbad"
            animal = "dog" >
        </ComponentWithProps> 
        <FragmentComponent> </FragmentComponent> 
    </div>,
    document.getElementById('root')
)