import React, { Component } from 'react';

import apiServices from '../api/api-services';
import MoviesList from '../components/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    apiServices
      .fetchTrendMovies()
      .then(trendMovies => this.setState({ movies: trendMovies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}
