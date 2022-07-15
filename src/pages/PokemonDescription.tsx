import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import { pokemonType } from '../features/pokemonSlice';

interface IPokemonDescriptionProps {
    pokemonSelected: pokemonType
}

const PokemonDescription: React.FunctionComponent<IPokemonDescriptionProps> = () => {
  const location = useLocation();
  const state = location.state as IPokemonDescriptionProps;
  const {pokemonSelected} = state;
  const {user} = useSelector((state:RootState) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(user===null){
      navigate("/")
    }
  }, [user])

    return (
        <>
            <div className='sm:w-1/3 mx-auto my-5 px-20 py-5 rounded-lg border-4 '>
            <img src={pokemonSelected.sprites?.front_default} alt="" className='mx-auto'/>
            <br />
            <p className='text-center'>{pokemonSelected.name}</p>
            <div >
                {pokemonSelected.types.map((type) => {
                return (<p className='text-center w-1/3 mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{type.type.name}</p>)
                })}
                </div>
            </div>
            <div className='flex flex-centr'>
            <Link to={"/pokeList"} className='mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Back to list</Link>
            </div>
        </>
  );
};

export default PokemonDescription;

