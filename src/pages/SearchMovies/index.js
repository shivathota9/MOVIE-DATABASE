import {useState, useEffect} from 'react'
import SearchDetails from '../../components/SearchDetails'
import {SearchedMovie} from '../../services/api'

const SearchMovies = ({location}) => {
  const [searchResults, setSearchResults] = useState([])
  const query = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    if (query) {
      SearchedMovie(query).then(data => setSearchResults(data.results))
    }
  }, [query])

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <SearchDetails results={searchResults} />
    </div>
  )
}
export default SearchMovies