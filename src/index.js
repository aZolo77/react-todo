import React from 'react';
import ReactDOM from 'react-dom';

// components
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

// styles
import './index.css';

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

      <TodoList todos={todoData} />
    </div>
  );
};

// = react creates html-elements in DOM
ReactDOM.render(<App />, document.getElementById('root'));

// =================================== PS =================================

// = js-code instead of jsx-code
// const el = React.createElement('h1', null, 'Hello World');
