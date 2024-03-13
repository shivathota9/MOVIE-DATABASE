import {useEffect, useState} from 'react'
import MovieDetails from '../../components/MovieDetails'
import {SingleMovieDetails, MovieCastDetails} from '../../services/api'

const MovieDetailsPage = ({match}) => {
  const [singleMovieDetails, setSingleMovieDetails] = useState({})
  const [movieCastDetails, setMovieCastDetails] = useState([])
  console.log(singleMovieDetails)

  useEffect(() => {
    const {params} = match
    const {id} = params
    console.log(id)
    SingleMovieDetails(id).then(data => setSingleMovieDetails(data))
    MovieCastDetails(id).then(data =>
      setMovieCastDetails(data.movieCastDetails),
    )
  }, [match])

  return (
    <div>
      <MovieDetails details={singleMovieDetails} />
      {/* Display cast members */}
    </div>
  )
}

export default MovieDetailsPage