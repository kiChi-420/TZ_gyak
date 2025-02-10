import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Contact, Services} from './components/pages'
 
function App() {
 
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Services/>}/>
          <Route path='/services' element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}
 
export default App