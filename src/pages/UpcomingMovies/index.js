import {useEffect, useState} from 'react'
import MovieGrid from '../../components/MovieGrid'
import {UpcomingMovie} from '../../services/api'

const TopRatedMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    UpcomingMovie().then(data => setUpcomingMovies(data.results))
  }, [])

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieGrid movies={upcomingMovies} />
    </div>
  )
}

export default TopRatedMovies