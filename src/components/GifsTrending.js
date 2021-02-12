import { useState, useEffect } from 'react';

import GetTrendingGifs from '../services/GetTrendingGifs';
import LazyLoadComponent from '../hooks/LazyLoadComponent';
import ListGifs from './ListGifs';

function GifsTrending() {
    //STATE
    const [trends, setTrends] = useState([]);

    //USE EFFECT
    useEffect(() => {
        GetTrendingGifs().then(data => {
            setTrends(data);
        });
    }, [])

    console.log(trends);

    return (
        <div>
            <ListGifs gifs={trends} />
        </div>
    );
}


function LazyTrending() {

    //Extramos los datos que nos devuelve el hook personalizado
    const { show, elementRef } = LazyLoadComponent({ rootMargin: '50px' });

    return (
        <div ref={elementRef}>
            {
                show ? <GifsTrending /> : null
            }
        </div>
    );
}

export default LazyTrending;