import * as React from 'react';
import { useLocation } from 'react-router';
import { pokemonType } from '../features/pokemonSlice';

interface IPokemonDescriptionProps {
    idSelected: string
}

const PokemonDescription: React.FunctionComponent<IPokemonDescriptionProps> = () => {
  const location = useLocation();
  const state = location.state as IPokemonDescriptionProps;
  const {idSelected} = state;
    return (
    <div>{idSelected}</div>
  );
};

export default PokemonDescription;

