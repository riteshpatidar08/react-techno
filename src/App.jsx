import React from 'react'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Input from './components/Input'
import Parent from './components/Parent'
function App() {
 
  return (
    <>
 <Parent/>
     <Navbar/>
     <Input/>
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path="/services" element={<Services/>} />
    <Route path='/product' element= {<Product/>}/>
   </Routes>
   </>
  )
}

export default App

//NOTE import BrowserRouter component in the main.jsx file and wrap the <App/> component in it
//NOTE Go to the App.jsx file import the Routes , Route component 
//NOTE call the Routes at top level then render Route component for each route you have to create it accept the path and element prop in path you have to pass the path where the component is going to show and in the element you have to pass which component is going to show on the screen.