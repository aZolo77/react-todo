import React, { Component } from 'react';

// styles
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem =
      this.state.label[0].toUpperCase() + this.state.label.slice(1);
    this.props.onItemAdded(newItem);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control mr-1"
          placeholder="What need to be done"
          onChange={this.onLabelChange}
          // two-way binded
          value={this.state.label}
        />
        <button type="button" className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  }
}
