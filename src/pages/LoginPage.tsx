import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logInReducer } from '../features/userSlice';

interface ILoginPageProps {
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    
    const handleLogin = () => {
        dispatch(logInReducer("Felipe Ramirez"));
        navigate("/pokeList")    
    }


  return(
    <div className='flex justify-center'>
        <div className='inline my-5'>
            <h1 className='mx-auto'>Log in to see the pokemon list</h1>
        </div>
        <div className='inline my-5'>
            <button className='mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogin}>Log in</button>
        </div>
    </div>
  ) ;
};

export default LoginPage;
