import React, { Component } from 'react';

// styles
import './todo-list-item.css';

// creating List Component
export default class TodoListItem extends Component {
  render() {
    // get props
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important
    } = this.props;

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
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
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
