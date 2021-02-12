import useGifs from '../hooks/useGifs';

import ListGifs from '../components/ListGifs';
import Spinner from '../components/Spinner';
import Header from '../components/Header';

function SearchResults({ params }) {

    //Obtener los parametros de Route
    const { keyword } = params;
    //console.log(keyword);
    //Custom Hooks del que recibimos los parametros LOADING y GIFS y le pasamos las KEYWORDS para que procese
    const { loading, gifs, setPage } = useGifs({ keyword });

    //Actualizamos el estado que nos devuelve el hook pasandole un +1 a lo que ya tenia.
    //Como no sabemos el valor que tiene, usamos una funcion interna en el state
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div>
            <Header>Giffy</Header>

            {
                loading ? <Spinner /> : <ListGifs gifs={gifs} />
            }

            <br></br>
            <button onClick={handleNextPage}>Siguiente página</button>
        </div >
    );
}

export default SearchResults;