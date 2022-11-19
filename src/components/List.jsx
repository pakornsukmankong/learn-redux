function List({ pokemon }) {
  return (
    <div>
      <div>{pokemon.name}</div>
      <img src={pokemon?.sprites?.front_default} />
    </div>
  )
}

export default List
