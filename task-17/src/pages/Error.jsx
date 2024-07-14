import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>
        error
      </h1>
      <p>PAGE WITH THIS URL NOT FOUND</p>
    
      <Link to={"/"}>
       Bach to Home
      </Link>
    </div>

    
  )
}

export default Error