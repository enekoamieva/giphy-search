import Gif from './Gif';

function ListGifs({ gifs }) {

    return (
        <div className="list-gifs">
            {
                gifs.map(gifItem => (
                    <Gif
                        key={gifItem.id}
                        gifItem={gifItem}
                    />
                ))
            }
        </div>
    )
}

export default ListGifs;