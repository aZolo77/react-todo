import React from 'react';

// styles
import './search-panel.css';

// creating Search Component
const SearchPanel = () => {
  return (
    <input
      className="form-control search-input"
      placeholder="type to search"
      disabled={false}
    />
  );
};

export default SearchPanel;
