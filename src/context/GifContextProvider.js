import React, { useState } from 'react';

const ContextGif = React.createContext({});

export function GifContextProvider({ children }) {
    const [gifs, setGifs] = useState([{
        id: '',
        title: '',
        url: ''
    }]);

    /* console.log(gifs); */

    return (
        <ContextGif.Provider value={{ gifs, setGifs }}>
            {children}
        </ContextGif.Provider>
    )
}

export default ContextGif;