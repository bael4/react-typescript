
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import About from './pages/About'
import ProductPages from './pages/ProductPages'




export default function App() {

 

  return (
    <>
     <Nav/>
    <Routes>
     
      <Route path='/' element={<ProductPages/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
 
  )
}
