import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {

  const cartSize = useSelector(store => store.cart.cartItems.length)

  return (
    <nav className='nav-bar'>
      <div className="nav-bar-container">
        <div className="nav-left">
            <Link to='/'><strong>cards.io</strong></Link>
        </div>
        <div className="nav-right">

            <Link to='/cart'>
              <FiShoppingCart />
            </Link>
            {/*cartSize*/}
        </div>
        </div>
    </nav>
  )
}

export default Navbar