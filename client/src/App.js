import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Matches from './pages/Matches';
import logo from './assets/logo.svg'

function App() {

  return (
    <div className='app'>
      <img src={logo} alt='Brasileirão Série A' width={150} className='logo'/>
      <h1>Campeonato brasileiro série A</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/matches' element={<Matches />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App