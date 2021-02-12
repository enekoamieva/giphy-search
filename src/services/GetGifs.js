//Obtener Gifs de la API

const apiKey = 'j4DkTPDjFUa2h3TC7BpUOjNyT4XVNnjL';

const getGifs = ({ limit = 5, keyword, page = 0 }) => {

    console.log(keyword);

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

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

export default getGifs;