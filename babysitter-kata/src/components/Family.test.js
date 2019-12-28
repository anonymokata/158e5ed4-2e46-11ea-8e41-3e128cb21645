import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Family from './Family';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Family component testing', function () {
  it('renders selection message', function () {
    const wrapper = shallow(<Family />);
    const header = <h1 className='col-12 p-2 bg-white titles'>Family</h1>;
    expect(wrapper.contains(header)).to.equal(true);
  });
  it('renders selection options', function () {
    const wrapper = shallow(<Family />);
    const selection = <option>Select a Family</option>;
    expect(wrapper.contains(selection)).to.equal(true);
  })
});