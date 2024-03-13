import {useEffect, useState} from 'react'
import MovieGrid from '../../components/MovieGrid'
import {TopRatedMovie} from '../../services/api'

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    TopRatedMovie().then(data => setTopRatedMovies(data.results))
  }, [])

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieGrid movies={topRatedMovies} />
    </div>
  )
}

export default TopRatedMovies