import React from 'react';

// components
import TodoListItem from './todo-list-item';

// styles
import './todo-list.css';

// creating List Component
const TodoList = ({ todos }) => {
  // Array iteration
  const elements = todos.map(item => {
    // get all props except [id]
    const { id, ...itemProps } = item;
    // Spreading an object
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
