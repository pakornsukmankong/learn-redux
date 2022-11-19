import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncPokemon = createAsyncThunk('pokemon/fetchAsyncPokemon', async () => {
  try{
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    const result = res.data.results
    const dataPromise = await result?.map(async(item)=>{
      const res = await axios.get(item.url)
      return res.data
    }
    )
    const data = await Promise.all(dataPromise)
    return data
  }catch(err) {
    console.log(err);
  }
})

const initialState = {
  pokemons: [],
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers:{
    [fetchAsyncPokemon.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncPokemon.fulfilled]: (state , action) => {
      return {...state, pokemons: action.payload}
    },
    [fetchAsyncPokemon.rejected]: () => {
      console.log('rejected');
    },
  }
}) 

export default pokemonSlice.reducer