import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logInReducer } from '../features/userSlice';

interface ILoginPageProps {
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    const [nameInput, setNameInput] = React.useState("");
    
    const handleLogin = () => {
        dispatch(logInReducer(nameInput));
        navigate("/pokeList")    
    }


  return(
    <div className='flex flex-col justify-center border-4 w-1/2 sm:w-1/3 mx-auto mt-10 rounded-xl'>
            <h1 className='mx-auto inline my-5 font-bold'>Log in to see the pokemon list</h1>
            <input type="text" placeholder='Enter your name' className='my-5 mx-auto p-3 border-2 border-amber-500 rounded-md' value={nameInput} onChange={e=>setNameInput(e.target.value)}/>
            <button className='mx-auto my-3 text-sm bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogin}>Log in</button>
    </div>
  ) ;
};

export default LoginPage;
