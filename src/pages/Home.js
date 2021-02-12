import React, { useState, Suspense } from 'react';
import { useLocation } from 'wouter';
import useGifs from '../hooks/useGifs';

import Header from '../components/Header';
import ListGifs from '../components/ListGifs';
//Componente importado y cargado solo cuando se necesita
const LazyTrending = React.lazy(
    () => import('../components/GifsTrending')
)


function Home() {

    //State
    const [keyword, setKeyword] = useState('');

    //Wouter custoom HOOK para mandar despues de darle a enviar
    const [path, pushLocation] = useLocation();

    //Custom Hooks del que recibimos los parametros LOADING y GIFS y le pasamos las KEYWORDS para que procese
    const { loading, gifs } = useGifs();

    //Palabra de busqueda
    const handleSearch = (event) => {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    //Enviar la palabra por parametros a la página SearchResults con Route
    const handleSubmit = (event) => {
        event.preventDefault();

        pushLocation(`/search/${keyword}`);
    }

    return (
        <div className="App-content">

            <Header>Giffy</Header>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={keyword}
                    onChange={handleSearch}
                />
                <button>Enviar</button>
            </form>

            <div className="last-search">
                <h3>Última búsqueda</h3>
                <ListGifs gifs={gifs} />
            </div>

            <Suspense fallback={'Cargando tendendcias...'}>
                <h3>Trending Gifs</h3>
                <LazyTrending />
            </Suspense>


        </div>
    );
}

export default Home;