import './index.css'
import {Component} from 'react'

import MovieGrid from '../../components/MovieGrid'
import {GetPopularMovies} from '../../services/api'

class PopularMovies extends Component {
  state = {
    popularMovies: [],
  }

  componentDidMount() {
    GetPopularMovies().then(data =>
      this.setState({popularMovies: data.results}),
    )
  }

  render() {
    const {popularMovies} = this.state
    return (
      <div>
        <h2>Popular</h2>
        <MovieGrid movies={popularMovies} />
      </div>
    )
  }
}

export default PopularMovies