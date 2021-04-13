import React, { Component } from 'react';

import MovieDetails from '../components/MovieDetails';
import AdditionalInfo from '../components/AdditionalInfo';
import ButtonGoBack from '../components/ButtonGoBack';
import apiServices from '../api/api-services';

export default class MoviesDetailsPage extends Component {
  state = {
    poster_path: '',
    release_date: '',
    first_air_date: '',
    title: '',
    original_name: '',
    vote_average: 0,
    overview: '',
    genres: [],
    id: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiServices
      .fetchMovieDetails(movieId)
      .then(movieDetails => this.setState({ ...movieDetails }));
  }

  render() {
    const { poster_path, id } = this.state;

    return (
      <div>
        <ButtonGoBack />

        <div className="infoMovie">
          <h2>Это страница MovieDetailsPage</h2>
          {poster_path && <MovieDetails {...this.state} />}
        </div>

        <AdditionalInfo id={id} />
      </div>
    );
  }
}
