import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./Pages/Home'
import'./Pages/History'
import'./Pages/Landing'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import History from './Pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './Componets/Header'
import Footer from './Componets/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Landing/>} path='/'/>
      <Route element={ <Home/>} path='/home'/>
      <Route element={<History/>} path='/history'/>
     </Routes>
     <Footer/>

      
    </>
  )
}

export default App
