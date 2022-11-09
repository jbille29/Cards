import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import CartRow from '../components/CartRow'
import Navbar from '../components/Navbar'
import { clearCart } from '../features/cart/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(store => store.cart.cartItems)

  const checkoutHandler = async() => {
    const items = cartItems.map(item => {

    })

    try {
      await axios.post('http://localhost:5002/api/checkout', )
    } catch(err) {
      console.log(err)
    }
    /*
    fetch('http://localhost:5002/api/checkout/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ]
      })
    })
    .then(res => {
      if (res.ok) {
        console.log(res.data)
        return res.json()
      }
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
      console.log(url)
    })
    .catch(e => {
      console.error(e.error)
    })
    */
    
  }


  return (
    <div>
      <Navbar />
      <main>
        <h2>Your Cart</h2>

        {
          cartItems.map(item => (
            <CartRow key={item.cartId} name={item.cartId} productId={item.productId} cartId={item.cartId}/>
          ))
        }

        <button onClick={()=>dispatch(clearCart())}>clear cart</button>
        <button onClick={checkoutHandler}>order now</button>
      </main>
    </div>
  )
}

export default Cart