import { useState } from 'react'
import * as React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PokemonCard from './component/PokemonCard'
import PokemonList from './pages/PokemonList'
import { RootState, useAppDispatch } from './app/store'
import { getPokemon, pokemonFetchStatus, selectPokemonStatus } from './features/pokemonSlice'
import { useSelector } from 'react-redux'
import PokemonDescription from './pages/PokemonDescription';
import LoginPage from './pages/LoginPage';


function App() {
  const [count, setCount] = useState(0);
  const {user} = useSelector((state:RootState) => state.user)

  return (
    <BrowserRouter>
    {user===null?
      <div>
        <nav className='flex w-100 sm:justify-left space-x-4 p-5 bg-orange-600'>
          <img src="https://i.pinimg.com/originals/ef/e4/f0/efe4f058ac4985936baf4b3d5027587d.png" alt="" width="50px" />
        </nav>
      </div>
    :
      <div>
        <nav className='flex justify-between w-100 space-x-4 p-5 bg-orange-600'>
          <Link to={"/pokeList"}>
            <img src="https://i.pinimg.com/originals/ef/e4/f0/efe4f058ac4985936baf4b3d5027587d.png" alt="" width="50px" />
          </Link>
          <div className='flex flex-row'>
            <p className='py-5 text-white font-bold'>User: Felipe Ramírez</p>
            <Link to={"/"} className='mx-5 my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-right'> Log out </Link>
          </div>
        </nav>
      </div>
    }

      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/pokeList" element={<PokemonList />}/>
        <Route path="/pokemonDescription" element={<PokemonDescription />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
