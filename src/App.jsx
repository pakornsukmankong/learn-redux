import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from './components/List'
import { increase, decrease } from './store/counterSlice'
import { fetchAsyncPokemon } from './store/pokemonSlice'

function App() {
  const count = useSelector((state) => state.counter.count)
  const pokemons = useSelector((state) => state.pokemon.pokemons)

  console.log(pokemons)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncPokemon())
  }, [])
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>

      {pokemons?.map((pokemon, index) => (
        <List key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default App
