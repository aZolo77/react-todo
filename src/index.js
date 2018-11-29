import React from 'react';
import ReactDOM from 'react-dom';

// jsx-code modified with babel
const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

// js-code
// const el = React.createElement('h1', null, 'Hello World');

// react creates html-elements in DOM
ReactDOM.render(el, document.getElementById('root'));
