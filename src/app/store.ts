import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { pokemonSlice } from "../features/pokemonSlice";
import userReducer from "../features/userSlice"

export const store = configureStore({
    reducer:{
        pokemon: pokemonSlice.reducer,
        user: userReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()