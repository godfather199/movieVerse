import { Link } from 'react-router-dom'
import './genre.css'

function Genre() {
  return (
    <div className="genreContainer">
        <div className="genreWrapper">
            <Link className="link" to = '/movies/top_rated'>
            <div className="genreTopRated">
                <span className="genreTitle">TOP RATED</span>
            </div>
            </Link>
            <Link className="link" to = '/movies/upcoming'>
            <div className="genreTopRated">
                <sapn className="genreTitle">UPCOMING</sapn>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Genre