import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../src/components/Main'
import Cart from './components/Cart'


function AllRoutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='' element={<Main/>} />
            <Route path='cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AllRoutes