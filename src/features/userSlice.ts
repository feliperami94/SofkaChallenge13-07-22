import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
}

const userSlice = createSlice(
    {
      name: 'userLog',
      initialState,
      reducers:{
        logInReducer(state, action){
          const stateLoggedIn = {...state, user: action.payload}
          return stateLoggedIn
        },
        logOutReducer(){
          return {user: null}
        }
      }
    }
  )
  
  
  export default userSlice.reducer
  
  export const {logInReducer, logOutReducer} = userSlice.actions