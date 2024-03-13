import MovieGrid from '../MovieGrid'

const SearchResults = ({results}) => (
  <div>
    <h2>Search Results</h2>
    <MovieGrid movies={results} />
  </div>
)

export default SearchResults