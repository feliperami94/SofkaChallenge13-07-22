import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { getPokemon, pokemonFetchStatus, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

type Props = {}

const PokemonList = (props: Props) => {
    const dispatch = useAppDispatch();
    const pokemonStatus = useSelector(selectPokemonStatus());
    const pokemonState = useSelector(selectPokemonState());
    React.useEffect(() => {
        if (pokemonStatus === pokemonFetchStatus.IDLE) {
          dispatch(getPokemon())
        }
      }, [])
  return (
    <>
    </>
  )
}

export default PokemonList