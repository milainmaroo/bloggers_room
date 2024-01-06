import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navTitle">
        <Link to='/'>
          <h1>Blogger's Room</h1>
        </Link>
      </div>
      <div className="navMenu">
        <Link to='/'>Home</Link>
        <Link to='/blog'>New Blog</Link>
      </div>
    </header>
  )
}

export default Navbar