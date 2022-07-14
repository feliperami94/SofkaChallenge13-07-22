import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PokemonCard from './component/PokemonCard'
import PokemonList from './pages/PokemonList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='flex sm:justify-left space-x-4 p-5 bg-orange-600'>
        <a href="">Pokelist</a>
        <a href="">User: Felipe Ramirez</a>
      </nav>
      <PokemonList/>
    </div>
  )
}

export default App
