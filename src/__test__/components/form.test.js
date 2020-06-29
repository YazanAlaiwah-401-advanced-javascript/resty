import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../components/form/form.js';

describe('<Form/>', () => {
  it('Does it properly store the users input into state', () => {
    const form = mount(<Form />);
    const input = form.find('input');
    input.simulate('change', { target: { name: 'input', value: 'test' } });
    // expect(thing.state.stuff).toBeFalsy();
    expect(form.state().url).toEqual('test');
  });
  it('Does it properly display the users input in the output area on form submit?', () => {
    const form = shallow(<Form />);
    expect(form.find('.continar p').exists()).toBeFalsy();
    const input = form.find('input');
    const button = form.find('[name="get"]');
    input.simulate('change', { target: { name: 'input', value: 'test' } });
    button.simulate('click', { target: { name: 'get' } });
    expect(form.find('.continar').render().length).toBeTruthy();
  });

  it('Do the method selectors/checkboxes obey your styling rules?', () => {
    const form = shallow(<Form />);
    const button = form.find('[name="get"]');
    button.simulate('click', { target: { name: 'get' } });
    expect(form.state().get).toEqual('green');
  });
});
