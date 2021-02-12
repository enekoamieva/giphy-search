import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/GetGifs';

//Context
import ContextGif from '../context/GifContextProvider';

//Le pasamos NULL como parametro por defecto si no recibe nada
function useGifs({ keyword } = { keyword: '' }) {

    //Context
    const { gifs, setGifs } = useContext(ContextGif);

    //State
    //const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    //Recuperamos valor de localstorage y si no tiene, mostrará ese valor
    //Lo mostrará en la Home que se llama a este Custom Hook sin KEYWORD
    const keywordLocal = localStorage.getItem('lastKeyword');
    const keywordToUse = keyword ? keyword : keywordLocal;
    //console.log(keywordToUse);

    //Use Effect
    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse }).then(data => {
            setGifs(data);
            setLoading(false);
            //Guardamos el resultado de la busqueda en el localstorage para mostrar si no hay keyword
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword, keywordToUse, setGifs]);

    //Use Effect que se ejecutará cada vez que la página cambie, es decir, la paginación
    useEffect(() => {
        if (page !== 0) {
            getGifs({ keyword: keywordToUse, page, }).then(nextGifs => {
                //Guardamos el state actual con las nueva imagenes, las anteriores con CONCAT
                setGifs(prevGifs => {
                    return prevGifs.concat(nextGifs);
                });
            });
        }
    }, [page])


    return { gifs, loading, setPage }
}

export default useGifs;