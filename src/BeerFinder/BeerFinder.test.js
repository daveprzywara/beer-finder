import React from 'react';
import { shallow } from 'enzyme';
import BeerFinder from './BeerFinder';

describe('<BeerFinder />', () => {
    it('renders without crashing', () => {
        shallow(<BeerFinder />);
    });
});
