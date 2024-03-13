import './App.css'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import MovieDetailsPage from './pages/MovieDetailsPage'
import SearchMovies from './pages/SearchMovies'

function App() {
  return (
    <Switch className="App">
      <Route>
        <Header />
        <Route exact path="/" component={PopularMovies} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movie/:id" component={MovieDetailsPage} />
        <Route exact path="/search" component={SearchMovies} />
      </Route>
    </Switch>
  )
}

export default App