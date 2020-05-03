import React, { useState, useEffect } from 'react';
import './Beer.css';

function Beer({beer}) {
    const {name, description, image_url, brewer_tips, ibu, abv} = beer;
    const [isActive, setActive] = useState(false);
    const [beersClass, setBeersClass] = useState('beers');
    const [similarBeers, setSimilarBeers] = useState([]);

    function handleBeerClick() {
        const beersActive = !isActive ? 'beers beers-active' : 'beers';
        setActive(!isActive);
        setBeersClass(beersActive);
    };

    // ibu >= beer.ibu - 2 && ibu <= beer.ibu + 2
    async function getSimilarBeersFromResponse() {
        const response = await fetch(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu-2}&ibu_lt=${ibu+2}`);
        const similarBeersResponse = await response.json();
        setSimilarBeers(similarBeersResponse);
    };

    useEffect(() => {
        getSimilarBeersFromResponse();
    }, [isActive]);

    return (
        <li className={beersClass} onClick={handleBeerClick}>
            <div className='beers-inner'>
                <p><strong>{name}</strong></p>
                    { isActive ? <>
                            <p>{description}</p>
                            <p>{brewer_tips}</p>
                            <p>IBU: {ibu} ABV: {abv}</p>
                            <hr />
                            <p>Similar Beers (IBU +/- 2): {' '}
                                {similarBeers.map(similarBeer => similarBeer.name).join(', ')}
                            </p>
                        </> :
                        <img src={image_url} alt={name} />
                    }
            </div>
        </li>
    )
};

export default Beer;