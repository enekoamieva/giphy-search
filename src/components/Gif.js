import { Link } from 'wouter';

function Gif({ gifItem }) {
    return (
        <Link to={`/gif/${gifItem.id}`}>
            <div className="gif-item" style={{ cursor: 'pointer' }}>
                <img loading="lazy" src={gifItem.url} alt="" />
                <span>{gifItem.title}</span>
            </div>
        </Link>
    )
}

export default Gif;