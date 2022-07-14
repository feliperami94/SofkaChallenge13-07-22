import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

interface IPokemonCardProps {
  pokemon: pokemonType
}

const PokemonCard: React.FunctionComponent<IPokemonCardProps> =  ({pokemon}) => {
   
  return (
    <>
    {/* <div>{pokemon.name}</div> */}
    {console.log(pokemon.name)}
    </>
  )
}

export default PokemonCard