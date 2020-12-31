import { useState } from 'react';
import Form from './components/Form';
import Grid from './components/Grid';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleAddPokemon = (pokemon) => {
    const findPokemon = pokemons.find((e) => e.name === pokemon.name);
    if (findPokemon) {
      const pokemonsCopy = [...pokemons];
      const count = findPokemon.count;
      pokemonsCopy.find((e) => e.name === pokemon.name).count = count + 1;
      setPokemons(pokemonsCopy);
    } else {
      setPokemons([...pokemons, pokemon]);
    }
  };

  return (
    <div className="App">
      <Form setPokemons={(e) => handleAddPokemon(e)} />
      <Grid pokemons={pokemons} />
    </div>
  );
}

export default App;
