import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <div>
      <h1>Nav</h1>
      <div>
        {location.pathname !== "/" && (
          <Link
            to={'/'}
          >

            home
          </Link>

          
        )}
      </div>
    </div>
  )
}

export default Navbar