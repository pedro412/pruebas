const Grid = ({ pokemons }) => {
  return (
    <>
      <h1>Grid</h1>

      {pokemons.length < 1 && (
        <div className="alert">No Pokemon captured yet</div>
      )}

      <div className="grid">
        {pokemons.map(({ name, id, image, count }) => (
          <div key={id} className="card">
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Count: {count}</p>
            <img src={image} alt={name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
