import { useContext } from 'react';

//Context
import ContextGif from '../context/GifContextProvider';

function useGlobalGifs() {

    //Context
    const { gifs } = useContext(ContextGif);
    return gifs;
}

export default useGlobalGifs;