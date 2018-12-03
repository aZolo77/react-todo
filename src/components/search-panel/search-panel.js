import React, { Component } from 'react';

// styles
import './search-panel.css';

// creating Search Component
export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        disabled={false}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
