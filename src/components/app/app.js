import React from 'react';

// components
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

// styles
import './app.css';

// combine components
const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a Lunch', important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList
        todos={todoData}
        onDeleted={id => {
          console.log(id);
        }}
      />
    </div>
  );
};

export default App;

// =================================== PS =================================

// = js-code instead of jsx-code
// const el = React.createElement('h1', null, 'Hello World');
