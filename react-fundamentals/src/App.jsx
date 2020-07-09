import './App.css';

import React from 'react';

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithProps from './components/basics/ComponentWithProps'
import FragmentComponent from './components/basics/FragmentComponent'
import RandomNumber from './components/basics/RandomNumber'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/repetitions/StudentsList';
import ProductsTable from './components/repetitions/ProductsTable';

export default () => (
  <div>
    <h1>React Fundamentals</h1>
    <div className="cards" color="#003F5C">
      <Card titulo="1. First component">
        <FirstComponent />
      </Card>
      <Card titulo="2. Component with props" color="#58508D">
        <ComponentWithProps
          name="Maju"
          animal="cat" >
        </ComponentWithProps>
      </Card>
      <Card titulo="3. First React Fragment" color="#BC5090">
        <FragmentComponent />
      </Card>
      <Card titulo="4. Random Number from a range" color="#FF6361">
        <RandomNumber
          min={1}
          max={100}>
        </RandomNumber>
      </Card>
      <Card titulo="5. Component with children" color="#FFA600">
        <Family sobrenome="Santos">
          <FamilyMember nome="Hadrizia"/>
          <FamilyMember nome="Marianne"/>
          <FamilyMember nome="Maju"/>
        </Family>
      </Card>
      <Card titulo="6. Students List" color="#56b5b5">
        <StudentsList/>
      </Card>
      <Card titulo="7. Products Table" color="#cbce1e">
        <ProductsTable/>
      </Card>
    </div>
  </div>
);