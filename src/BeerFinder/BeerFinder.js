import React, { useState, useEffect } from 'react';
import BeerList from './components/BeerList/BeerList';
import BeerFilter from './components/BeerFilter/BeerFilter';

function BeerFinder() {
    const [filterParams, setFilterParams] = useState({});
    const [beers, setBeers] = useState([]);
    const {abv = 0, ibu = 0} = filterParams;

    async function getBeersFromResponse() {
        const response = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abv}&ibu_gt=${ibu}`);
        const beers = await response.json();
        setBeers(beers);
    };

    useEffect(() => {
        getBeersFromResponse()
    }, [filterParams]);

    return (
        <div>
            <BeerFilter setFilterParams={setFilterParams} />
            <BeerList beers={beers} abv={abv} ibu={ibu} />
        </div>
    )
};

export default BeerFinder;