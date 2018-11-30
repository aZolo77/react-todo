import React from 'react';

// styles
import './item-status-filter.css';

// creating Status Filter Component
const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Active
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
