import { useState } from 'react';

const apiURL = 'http://localhost:4000/api/v1/pokemon';

async function fetchPokemon(name) {
  try {
    const result = await fetch(`${apiURL}/${name}`);
    const data = await result.json();
    return data.pokemon;
  } catch (error) {
    return null;
  }
}

const Form = ({ setPokemons }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pokemon = await fetchPokemon(value);
    if (pokemon) {
      pokemon.count = 1;
      setPokemons(pokemon);
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} id="form">
        <input
          name="name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button>Catch</button>
      </form>
    </>
  );
};

export default Form;
