import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import React, { useState } from 'react'


function App() {
  const [width, setWindowWidth] = useState(0)

  const updateDimensions = () => {
    width = window.innerWidth
    setWindowWidth(width)

    updateDimensions()
  }

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
