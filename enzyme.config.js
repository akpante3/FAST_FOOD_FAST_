/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.expect = expect;



Enzyme.configure({ adapter: new Adapter() });