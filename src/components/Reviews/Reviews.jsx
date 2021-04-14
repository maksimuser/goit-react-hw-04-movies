import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import apiServices from '../../api/api-services';
import ReviewsItem from '../ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    apiServices
      .fetchReviews(movieId)
      .then(results => this.setState({ reviews: results }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { reviews, error, isLoading } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <ul>
          {isLoading ? (
            <Loader type="ThreeDots" color="blue" height={80} width={80} />
          ) : reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id} author={author} content={content} />
            ))
          ) : (
            <span>We don't have any reviews for this movie</span>
          )}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
