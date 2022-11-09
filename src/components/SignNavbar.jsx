import React from 'react'
import { Link } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'

const SignNavbar = ({ setNavButton }) => {


  return (
    <nav className='signature-nav'>
        <Link onClick={()=>setNavButton('home')}>Home</Link>
        
        <span className="close">
          <BsXLg onClick={()=> setNavButton('x')}/>
        </span>
        
    </nav>
  )
}

export default SignNavbar