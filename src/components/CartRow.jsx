import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { addOne, subtractOne } from '../features/cart/cartSlice'
import prodImg from '../assets/p4.jpg'

const CartRow = ({name, productId, cartId}) => {

  const dispatch = useDispatch()

  const qty = useSelector(store => {
    return store.cart.cartItems.find(el => el.cartId === cartId).qty
  })

  return (
    <div className='cart-row'>
        <img src={prodImg} alt="no image" />
        <div className='cart-row-info'>
            <div className='cart-row-product-info'>
                <h5>{name}</h5>
                <div>
                  <button onClick={()=>dispatch(subtractOne(cartId))}>Subtract</button>
                  {qty}
                  <button onClick={()=>dispatch(addOne(cartId))}>Add</button>
                </div>
                <p>price</p>
            </div>
            <div className='cart-row-delivery-info'>
                <h5>Delivery</h5>
                <p>We'll mail it to ...</p>
                <p>Arrives: ...</p>
                <Link to={`/sign/${productId}`}>Edit Card</Link>
            </div>
        </div>
    </div>
  )
}

export default CartRow