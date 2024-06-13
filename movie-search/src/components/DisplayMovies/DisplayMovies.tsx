import { Movie } from '../../types/types';

import MovieCard from '../MovieCard/MovieCard';

type DisplayMoviesProps = {
  movies: Movie[];
};

function DisplayMovies(props: DisplayMoviesProps) {
  const { movies } = props;

  const movieComponents = movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.imdbID} />;
  });

  return <section>{movieComponents}</section>;
}

export default DisplayMovies;
