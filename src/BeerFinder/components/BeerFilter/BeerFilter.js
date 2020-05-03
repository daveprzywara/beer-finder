import React, { createRef } from 'react';

function BeerFilter({setFilterParams}) {
    const abvInput = createRef();
    const ibuInput = createRef();

    function handleSubmit(event) {
        const abv = abvInput.current.value || 0;
        const ibu = ibuInput.current.value || 0;
        setFilterParams({abv, ibu});
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label> ABV: </label>
            <input type='number' name='abv' ref={abvInput} step='0.01' />
            <label> IBU: </label>
            <input type='number' name='ibu' ref={ibuInput} step='0.01' />
            <input type='submit' value='Find Beers' />
        </form>
    )
};

export default BeerFilter;