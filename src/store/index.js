import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import pokemonReducer from './pokemonSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer
  }
})