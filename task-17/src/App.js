import React from 'react'
import Layout from './Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Error from './pages/Error'
import FactPage from './pages/FactPage'

const App = () => {
  return (
    <Layout>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/about/:id'} element={<AboutPage/>}/>
            <Route path={'/fact/:id'} element={<FactPage/>}/>
            
            <Route path={'*'} element={<Error/>}/>


            
        </Routes>
    </Layout>
  )
}

export default App