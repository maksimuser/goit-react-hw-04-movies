import React, { Component } from 'react';
import apiServices from '../../api/api-services';
import ReviewsItem from '../ReviewsItem';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiServices
      .fetchReviews(movieId)
      .then(results => this.setState({ reviews: results }));
  }
  render() {
    const { reviews } = this.state;

    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id} author={author} content={content} />
          ))
        ) : (
          <span>We don't have any reviews for this movie</span>
        )}
      </ul>
    );
  }
}
