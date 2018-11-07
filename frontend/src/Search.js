import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let searchResults = await JoblyApi.searchCompany(this.state.search);
    this.props.handleSearch(searchResults);
    this.setState({ search: '' });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit} method="get">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
