import React from 'react'

const SignNavbar = ({ setLowNavButton }) => {


  return (
    <nav className='signature-low-nav'>
        <button onClick={()=>setLowNavButton('cancel')}>Cancel</button>
        <button onClick={()=> setLowNavButton('apply')}>Apply</button>
    </nav>
  )
}

export default SignNavbar