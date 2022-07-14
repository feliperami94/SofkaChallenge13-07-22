import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type pokemonType = {
    abilities: object[],
    base_experience: number,
    forms: object[],
    game_indices: object[],
    height: number,
    held_items: object[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: object[],
    name: string,
    order: number,
    past_types: object[],
    species: {name: string, url: string},
    sprites: object,
    stats: object[],
    types: object[],
    weight: number
}

export enum pokemonFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

interface pokeSliceType {
    pokemonList: pokemonType[],
    status: pokemonFetchStatus,
    error: null | string,
}

const initialState: pokeSliceType = {
    pokemonList: [],
    status: pokemonFetchStatus.IDLE,
    error: null
}

export const getPokemon = createAsyncThunk('getPokemon', async () => {
    let fullResponse: pokemonType[] = []
    for (let index = 1; index <= 50; index++) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+index.toString()+"/")
        const responseJson = await response.json() as pokemonType
        fullResponse.push(responseJson)
    }
    console.log(fullResponse)
    return (fullResponse) as pokemonType[]
})

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getPokemon.pending, (state) => {
            state.status = pokemonFetchStatus.PENDING
        })
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.status = pokemonFetchStatus.COMPLETED
            state.pokemonList.push(action.payload)   
        })
        builder.addCase(getPokemon.rejected, (state, action) => {
            state.status = pokemonFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.pokemonList
        })

    }

})


export const selectPokemonState = () => (state: RootState) => state.pokemon.pokemonList
export const selectPokemonStatus = () => (state: RootState) => state.pokemon.status
export const selectPokemonFetchError = () => (state: RootState) => state.pokemon.error


