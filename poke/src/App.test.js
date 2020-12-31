import App from './App';
import Form from './components/Form';
import Grid from './components/Grid';
const enzyme = require('enzyme');

describe('App', () => {
  const wrapper = enzyme.shallow(<App />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <Form /> tree', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should render <Grid /> tree', () => {
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});
