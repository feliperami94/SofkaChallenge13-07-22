import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

type Props = {}

const PokemonCard =  (props: Props) => {



    
  return (
    <div>{pokemonState[0].name}</div>
  )
}

export default PokemonCard