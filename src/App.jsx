import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from './Layout'

function App() {

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Layouts/>}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
