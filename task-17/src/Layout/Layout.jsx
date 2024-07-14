import React from 'react'
import Navbar from '../components/Navbar'
const Layout = ({props}) => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main>
            <div>
                {props}
            </div>
        </main>
    </div>
  )
}

export default Layout