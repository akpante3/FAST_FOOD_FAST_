import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Footer from '../src/component/Footer';
import Navbar from '../src/component/NavBar';
import { CartCards } from '../src/component/CartCards';
import { OrdersCards } from '../src/component/OrdersCards';


describe('component test', () => {
    describe('Components Test Suite', () => {
        describe('<Footer />', () => {
          it('renders Footer Component', () => {
            const wrapper = shallow(<Footer />);
            expect(wrapper.length).to.eql(1);
            expect(wrapper.html().length).to.eql(57);
          });
        });
});

describe('Components Test Suite', () => {
    describe('<CartCards />', () => {
      it('renders CartCards Component', () => {
      const wrapper = shallow(<CartCards />);
        expect(wrapper.length).to.eql(1);
      });
    });
});

describe('Components Test Suite', () => {
    describe('<Navbar />', () => {
      it('renders Navbar Component', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.length).to.eql(1);
      });
    });
});

describe('Components Test Suite', () => {
    describe('<OrdersCards />', () => {
      it('renders OrdersCards Component', () => {
        const wrapper = shallow(<OrdersCards />);
        expect(wrapper.length).to.eql(1);
        wrapper.find('button').at(0).simulate('click');
      });
    });
});


});