import React from 'react';

import './ProductsTable.css';

import products from '../../data/products';

export default props => {

  const productsTR = products.map((product, i) => {
    return (
      <tr key={i} className={ i % 2 != 0 ? 'odd' : '' }>
        <td>
          {product.id}
        </td>
        <td>
          {product.name}
        </td>
        <td>
          {product.price}
        </td>
      </tr>
    )
  })
  return (
    <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsTR}
        </tbody>
      </table>
    </div>
  )
}