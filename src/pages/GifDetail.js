import { useState, useEffect, useContext } from 'react';
//Context
/* import ContextGif from '../context/GifContextProvider'; */
import UseGlobalGifs from '../hooks/useGlobalGifs';

import Gif from '../components/Gif';

function GifDetail({ params }) {

    //Context
    const gifs = UseGlobalGifs();
    /* console.log(gifs); */

    //ID que extraemos de los parametros que nos envia ROUTE
    const { id } = params;

    //Buscar en el contexto el GIF qque tiene la ID que recibe por parametros
    const gif = gifs.find(gifItem =>
        gifItem.id === id
    )

    console.log(gif);

    //STATE
    /* const [gif, setGif] = useState({})

    //USE EFFECT
    useEffect(() => {
        getGif(id).then(gif => setGif(gif));
    }, [])

    //Obtener Gifs de la API
    const getGif = (id) => {
        const apiKey = 'j4DkTPDjFUa2h3TC7BpUOjNyT4XVNnjL';

        const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

        return fetch(apiUrl)
            .then(res => res.json())
            .then(response => {
                const { id, title } = response.data;
                const { url } = response.data.images.fixed_height_downsampled;
                return { title, id, url };
            });
    } */

    return (
        <Gif gifItem={gif} />
    );
}

export default GifDetail;