import React, { Component } from 'react';
import apiServices from '../../api/api-services';
import CastItem from '../CastItem';

class Cast extends Component {
  state = {
    actor: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiServices
      .fetchCredits(movieId)
      .then(cast => this.setState({ actor: cast }));
  }

  render() {
    const { actor } = this.state;

    return (
      <ul>
        {actor.length > 0 ? (
          actor.map(({ name, profile_path, cast_id, character }) => {
            return (
              <CastItem
                key={cast_id}
                name={name}
                path={profile_path}
                character={character}
              />
            );
          })
        ) : (
          <span>No cast</span>
        )}
      </ul>
    );
  }
}
export default Cast;
