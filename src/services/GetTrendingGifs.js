//Obtener Gifs de la API

const apiKey = 'j4DkTPDjFUa2h3TC7BpUOjNyT4XVNnjL';

const getTrendingGifs = (limit = 5) => {

    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&rating=g`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const dataGifs = data.map(gif => {
                const { url } = gif.images.downsized_medium;
                const { title, id } = gif;
                return { title, id, url };
            });
            return dataGifs;
        })
}

export default getTrendingGifs;