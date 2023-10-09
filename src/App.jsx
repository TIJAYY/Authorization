import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authorization } from './components/Authorization/Authorization'
import {NavBar} from './components/Authorization/NavBar'
import HomePage from './components/HomePage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   <div className='body'>
   <NavBar/>
   <div className='container'>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Authorization/>}>
      </Route>
    </Routes>
   </div>
   </div>
   </BrowserRouter>

  )
}

export default App 
