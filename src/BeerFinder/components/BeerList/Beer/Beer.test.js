import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Beer from './Beer';

describe('<Beer />', () => {
    const beer = {
        name: '',
        description: '',
        image_url: '',
        brewer_tips: '',
        ibu: 0,
        abv: 0
    };

    it('renders without crashing', () => {
        shallow(<Beer beer={beer} />);
    });

    it('should trigger details while being active', () => {
        const wrapper = mount(<Beer beer={beer} />);
        expect(wrapper.find('p')).to.have.lengthOf(1);
        wrapper.find('.beers').simulate('click');
        expect(wrapper.find('p')).to.have.lengthOf(5);
        wrapper.find('.beers').simulate('click');
        expect(wrapper.find('p')).to.have.lengthOf(1);
    });
});
