import React from 'react';

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithProps from './components/basics/ComponentWithProps'
import FragmentComponent from './components/basics/FragmentComponent'
import RandomNumber from './components/basics/RandomNumber'
import Card from './components/layout/Card'

export default () => (
  <div>
    <h1>React Fundamentals</h1>
    <Card titulo="1. First component">
      <FirstComponent />
    </Card>
    <Card titulo="2. Component with props">
      <ComponentWithProps
        name="Maju"
        animal="cat" >
      </ComponentWithProps>
    </Card>
    <Card titulo="3. First React Fragment">
      <FragmentComponent />
    </Card>
    <Card titulo="4. Random Number in a range">
      <RandomNumber
        min={1}
        max={100}>
      </RandomNumber>
    </Card>
  </div>
);