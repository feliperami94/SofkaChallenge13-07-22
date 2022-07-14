import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

interface IPokemonCardProps {
  pokemon: pokemonType
}

const PokemonCard: React.FunctionComponent<IPokemonCardProps> =  ({pokemon}) => {
  const navigate = useNavigate();

  // const cardClick = () => {
    
  // }

   
  return (
    <Link to={"/pokemonDescription"} state={{idSelected: pokemon.name}}>
    <div className='m-5 px-20 py-5 rounded-lg border-4'>
      <img src={pokemon.sprites?.front_default} alt="" />
      <p className='text-center'>{pokemon.name}</p>
      <div className='grid row-auto'>
      {pokemon.types.map((type) => {
        return (<p className='mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{type.type.name}</p>)
      })}
      </div>
    </div>
    </Link>
  )
}

export default PokemonCard