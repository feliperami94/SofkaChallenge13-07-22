import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

type Props = {}

const PokemonList = (props: Props) => {
  const dispatch = useAppDispatch();
  const pokemonStatus = useSelector(selectPokemonStatus());
  const pokemonState: pokemonType[] = useSelector(selectPokemonState());
  React.useEffect(() => {
    if (pokemonStatus === pokemonFetchStatus.IDLE) {
      dispatch(getPokemon(1))
    }
  }, [])


  return (
   <div>{pokemonState[0]?.name}</div>
  )
}

export default PokemonList