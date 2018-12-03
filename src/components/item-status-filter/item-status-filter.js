import React, { Component } from 'react';

// styles
import './item-status-filter.css';

// creating Status Filter Component
export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    // get filter value from parrent-props
    const { filter } = this.props;

    // creating buttons from array
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button
          type="button"
          className={`btn ${btnClass}`}
          key={name}
          onClick={() => {
            this.props.onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
