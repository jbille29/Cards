import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {


  return (
    <div>
        <Link to='/sign'>Sign</Link>
        <Link to='/address'>Address</Link>
        <Link to='/send'>Send</Link>
    </div>
  )
}

export default Breadcrumbs