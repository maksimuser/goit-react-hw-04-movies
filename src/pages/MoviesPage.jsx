import { Component } from 'react';

import queryString from 'query-string';

import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import apiServices from '../api/api-services';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { search } = this.props.location;
    const parsed = queryString.parse(search);

    if (parsed?.query) {
      apiServices
        .fetchMovies(parsed.query)
        .then(results => this.setState({ movies: results }));
    }
  }

  onSubmitChange = query => {
    apiServices
      .fetchMovies(query)
      .then(results => this.setState({ movies: results }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <div>Movies Page</div>
        <SearchForm onSubmit={this.onSubmitChange} />
        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}
export default MoviesPage;
