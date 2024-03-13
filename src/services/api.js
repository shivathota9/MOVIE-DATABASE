// api.js
const API_KEY = 'c067f78a68e101bc4b710f7d9d7e1b51'

export const GetPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  )
  const data = await response.json()
  return data
}

export const TopRatedMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  )
  const data = await response.json()
  return data
}

export const UpcomingMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  )
  const data = await response.json()
  return data
}

export const SingleMovieDetails = async MOVIE_ID => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`,
  )
  const data = await response.json()
  return data
}

export const MovieCastDetails = async MOVIE_ID => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`,
  )
  const data = await response.json()
  return data
}

export const SearchedMovie = async MOVIE_NAME => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`,
  )
  const data = await response.json()
  return data
}