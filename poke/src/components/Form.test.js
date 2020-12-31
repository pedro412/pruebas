import Form from './Form';
const enzyme = require('enzyme');

describe('<Form />', () => {
  const wrapper = enzyme.shallow(<Form />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change input', () => {
    const wrapper = enzyme.mount(<Form />);

    wrapper.find('input').simulate('change', {
      target: {
        name: 'name',
        value: 'pikachu',
      },
    });

    expect(wrapper.find('input').prop('value')).toBe('pikachu')
  });
});
