import Grid from './Grid';
const enzyme = require('enzyme');

const pokemonsMock = [
  {
    id: 25,
    name: 'pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    count: 1,
  },
  {
    id: 143,
    name: 'snorlax',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png',
    count: 1,
  },
  {
    id: 448,
    name: 'lucario',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png',
    count: 1,
  },
];

describe('<Grid />', () => {
  const wrapper = enzyme.shallow(<Grid pokemons={[]} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain alert if there are no pokemons', () => {
    expect(wrapper.find('.alert')).toHaveLength(1);
  });

  it('should render 3 cards if there are 3 pokemons', () => {
    const wrapper = enzyme.shallow(<Grid pokemons={pokemonsMock} />);
    expect(wrapper.find('.card')).toHaveLength(3);
  });
});
