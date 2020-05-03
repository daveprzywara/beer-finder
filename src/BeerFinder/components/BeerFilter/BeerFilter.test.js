import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import BeerFilter from './BeerFilter';

describe('<BeerFilter />', () => {
    it('renders without crashing', () => {
        shallow(<BeerFilter />);
    });

    it('should render form inputs', () => {
        const wrapper = mount(<BeerFilter />);
        expect(wrapper.find('input')).to.have.lengthOf(3);
        expect(wrapper.find('input[type="number"]')).to.have.lengthOf(2);
        expect(wrapper.find('input[type="submit"]')).to.have.lengthOf(1);
    });

    it('should call setFilterParams on form submit', () => {
        const spy = sinon.spy();
        const wrapper = mount(<BeerFilter setFilterParams={spy} />);
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(spy.calledOnce).to.equal(true);
    })
});
