import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    const { query } = this.state;
    const { onSubmit, history } = this.props;

    evt.preventDefault();

    if (query) {
      onSubmit(query);
    } else {
      return alert('Enter something a word ');
    }

    history.push({
      search: `query=${query}`,
    });

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            value={this.state.query}
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export default withRouter(SearchForm);
