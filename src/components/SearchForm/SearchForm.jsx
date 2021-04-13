import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { query } = this.state;
    this.props.onSubmit(query);

    this.props.history.push({
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
export default withRouter(SearchForm);
