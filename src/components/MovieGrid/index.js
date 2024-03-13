import './index.css'
import {Link} from 'react-router-dom'

const MovieGrid = ({movies}) => (
  <div className="container1">
    {movies.map(movie => (
      <div className="container2" key={movie.id}>
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3 className="h3">{movie.title}</h3>
        <p className="h3">Rating: {movie.vote_average}</p>
        <Link className="link" to={`/movie/${movie.id}`}>
          <button className="btn" type="button">
            View Details
          </button>
        </Link>
      </div>
    ))}
  </div>
)
export default MovieGrid