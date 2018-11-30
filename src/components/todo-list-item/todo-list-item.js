import React, { Component } from 'react';

// styles
import './todo-list-item.css';

// creating List Component
export default class TodoListItem extends Component {
  // property, that stores this object State [in prototype]
  state = {
    done: false,
    important: false
  };

  // changes State for 'Done' [in prototype]
  onLabelClick = () => {
    // asynchronus
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  // changes State for 'Important' [in prototype]
  onMarkImportant = () => {
    // asynchronus
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    // get props
    const { label, onDeleted } = this.props;
    // get Status values
    const { done, important } = this.state;

    // сменить имя класса
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
