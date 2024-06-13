import { useState } from 'react';
import { APIResponse, Movie } from '../../types/types';

type SearchMoviesProps = {
  setMovies: (movies: Movie[]) => void;
};

function SearchMovies(props: SearchMoviesProps) {
  const [query, setQuery] = useState<string>('');
  const { setMovies } = props;

  async function searchMovies(): Promise<void> {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=37fe945a&s=${query}`
    );
    const data: APIResponse = await response.json();

    setMovies(data.Search);
  }

  return (
    <section>
      <input
        type='text'
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <button onClick={searchMovies}>Sök</button>
    </section>
  );
}

export default SearchMovies;
