import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

import './components/MoviewCard'
import MovieCard from './components/MoviewCard'
import Favorites from './pages/Favorites';
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <MovieProvider>
       <NavBar/>
       <main className='main-content'>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>

      </Routes>
  
  </main>
 
    </MovieProvider>)
  
}



export default App
