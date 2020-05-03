import React from 'react';
import Beer from './Beer/Beer';

function BeerList({beers}) {
    const beersList = beers.map(beer => {
        return <Beer key={beer.name} beer={beer} beers={beers} />
    });

    return <div>{beersList}</div>
};

export default BeerList;