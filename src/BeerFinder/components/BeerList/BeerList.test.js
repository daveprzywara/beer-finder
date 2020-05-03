import React from 'react';
import { shallow } from 'enzyme';
import BeerList from './BeerList';

describe('<BeerList />', () => {
    it('renders without crashing', () => {
        shallow(<BeerList beers={[]} />);
    });
});
