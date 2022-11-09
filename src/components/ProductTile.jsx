import React from 'react'
import { Link } from 'react-router-dom'

import productIm from '../assets/sloth.png'


const ProductTile = ({id, price, name}) => {
  return (
    <Link to={`/details/${id}`}>
      <div className='product-tile'>
        <div className='product-tile-content'>
            <img className='product-tile-img' src={productIm} alt={id} />
            <div className='product-tile-text'>
                <p className='product-tile-name'><strong>{name}</strong></p>
                <p>${price}</p>
            </div>
        </div>   
      </div>
    </Link>
  )
}

export default ProductTile