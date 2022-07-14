import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

interface IPokemonCardProps {
  pokemon: pokemonType
}

const PokemonCard: React.FunctionComponent<IPokemonCardProps> =  ({pokemon}) => {

  const cardClick = () => {
    
  }
   
  return (

    <div className='m-5 px-20 py-5 rounded-lg border-4' onClick={cardClick}>
      <img src={pokemon.sprites?.front_default} alt="" />
      <p className='text-center'>{pokemon.name}</p>
      <div className='grid row-auto'>
      {pokemon.types.map((type) => {
        return (<p className='mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{type.type.name}</p>)
      })}
      </div>
    </div>
  )
}

export default PokemonCard