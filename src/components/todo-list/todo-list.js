import React from 'react';

// components
import TodoListItem from '../todo-list-item';

// styles
import './todo-list.css';

// creating List Component
const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  // Array iteration
  const elements = todos.map(item => {
    // get all props except [id]
    const { id, ...itemProps } = item;
    // Spreading an object
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
