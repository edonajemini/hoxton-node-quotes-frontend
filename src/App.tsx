import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Singlequote } from './pages/Singlequote'

type Quotes = {
  id: number,
  name:string,
  lastname:string,
  age:string,
  Image:string,
  quote: string
}

function App() {
 
  return (
    <div className="App">
      <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element= {<Home />} />
      <Route path="singlequote" element={<Singlequote />} />
      </Routes>
      
    </div>
  )
}

export default App
