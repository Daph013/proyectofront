import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Compraosrs from './pages/compraosrs'
import Whatsapp from './components/Whatsapp'
import Comprars from './pages/comprars'
import Ventaosrs from './pages/ventaosrs'
import Ventars from './pages/ventars'

const App = () => {
  return (
  
  <>
  <BrowserRouter>
  
        <Header/>
        <br />
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Compraosrs" element={<Compraosrs/>} />
            <Route path="/Comprars" element={<Comprars/>} />
            <Route path="/Ventaosrs" element={<Ventaosrs/>} />
            <Route path="/Ventars" element={<Ventars/>} />
           
        </Routes>
        <Footer/>
    </BrowserRouter>
    <Whatsapp/>

  
  </>
    
  )
}

export default App