import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState, useAppDispatch } from '../app/store';
import PokemonCard from '../component/PokemonCard';
import { getPokemon, pokemonFetchStatus, pokemonType, selectPokemonState, selectPokemonStatus } from '../features/pokemonSlice';

type Props = {}

const PokemonList = (props: Props) => {
  let [filterInput, setFilterInput] = useState("");

  const pokemonState: pokemonType[] = useSelector(selectPokemonState());
  const dispatch = useAppDispatch();
  const pokemonStatus = useSelector(selectPokemonStatus());
  const {user} = useSelector((state:RootState) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pokemonStatus === pokemonFetchStatus.IDLE) {
        dispatch(getPokemon())     
    }
    
  }, [dispatch])

  React.useEffect(() => {
    if(user===null){
      navigate("/")
    }
  }, [user])


  return (
    <>
    <div className='flex justify-center'>
      <input placeholder='Search a pokemon' type="text" value={filterInput} onChange={e=>setFilterInput(e.target.value.toLocaleLowerCase())} className='my-5 mx-auto p-5 border-2 border-amber-500 rounded-md'/>
    </div>
      <div className='flex flex-wrap justify-between p-10' >
        {pokemonState.filter(pokemon => pokemon.name.includes(filterInput))
        .map((pokemon: pokemonType) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        })}
      </div>
    </>
  )
}

export default PokemonList