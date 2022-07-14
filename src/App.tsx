import { useState } from 'react'
import * as React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PokemonCard from './component/PokemonCard'
import PokemonList from './pages/PokemonList'
import { useAppDispatch } from './app/store'
import { getPokemon, pokemonFetchStatus, selectPokemonStatus } from './features/pokemonSlice'
import { useSelector } from 'react-redux'


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
