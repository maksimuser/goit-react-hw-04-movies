import { Component } from 'react';
import MoviesItem from '../MoviesItem';
class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <ul>
        {movies.map(movie => (
          <MoviesItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );
  }
}
export default MoviesList;
