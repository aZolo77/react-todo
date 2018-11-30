import React from 'react';

// styles
import './app-header.css';

// creating Header Component
const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>My Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
