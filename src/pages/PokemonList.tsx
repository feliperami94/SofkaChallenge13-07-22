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
  }, [dispatch])



  return (
    <div className='flex flex-wrap justify-center' >
      {pokemonState.map((pokemon: pokemonType) => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      })}
    </div>
  )
}

export default PokemonList