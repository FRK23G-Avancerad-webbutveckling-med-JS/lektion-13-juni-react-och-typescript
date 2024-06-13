import { Movie } from '../../types/types';

type MovieCardProps = {
  movie: Movie;
};

function MovieCard(props: MovieCardProps) {
  const { movie } = props;

  return (
    <article>
      <img src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <h3>Utgiven: {movie.Year}</h3>
    </article>
  );
}

export default MovieCard;
