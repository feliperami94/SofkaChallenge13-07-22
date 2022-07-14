import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import PokemonCard from '../component/PokemonCard';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

type Props = {}

const PokemonList = (props: Props) => {

  const pokemonState: pokemonType[] = useSelector(selectPokemonState());
  const dispatch = useAppDispatch();
  const pokemonStatus = useSelector(selectPokemonStatus());
  React.useEffect(() => {
    if (pokemonStatus === pokemonFetchStatus.IDLE) {
        dispatch(getPokemon())     
    }
  }, [])


  return (
    <>
   {pokemonState.map((pokemon: pokemonType) => {
   <PokemonCard key={pokemon.id} pokemon={pokemon}/>
   })}
    </>
  )
}

export default PokemonList