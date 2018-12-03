import React, { Component } from 'react';

// components
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../itemAddForm';

// styles
import './app.css';

export default class App extends Component {
  // private prop
  maxId = 100;

  // ! нельзя напрямую изменять State !
  state = {
    todoData: [
      this._createTodoItem('Drink Coffee'),
      this._createTodoItem('Make Awesome App'),
      this._createTodoItem('Have a Lunch')
    ],
    term: '',
    filter: 'all' // all, active, done
  };

  // _toggleFunc
  _toggleProperty(arr, id, propName) {
    // create new obj with the same id and other [done/important] property
    const idx = arr.findIndex(el => {
      return el.id === id;
    });

    const oldItem = arr[idx];
    // using dynamic prop
    let newItem = { ...oldItem, [propName]: !oldItem[propName] };

    //construct new Arr
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  // создание нового элемента списка
  _createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  // поиск элементов
  _search(itemsArr, term) {
    if (term.length === 0) return itemsArr;

    // filter элементов по переданному тексту
    return itemsArr.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    });
  }

  // filter elems
  filter(itemsArr, filter) {
    switch (filter) {
      case 'all':
        return itemsArr;
      case 'active':
        return itemsArr.filter(item => !item.done);
      case 'done':
        return itemsArr.filter(item => item.done);
      default:
        return itemsArr;
    }
  }

  // find elems by search-word
  onSearchChange = term => {
    this.setState({ term });
  };

  // find elems by filter settings
  onFilterChange = filter => {
    this.setState({ filter });
  };

  // add item
  addItem = text => {
    // generate id and new Element
    const newTodo = this._createTodoItem(text);

    // add elem in State
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newTodo];
      return {
        todoData: newArr
      };
    });
  };

  // delete item
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  // important item
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this._toggleProperty(todoData, id, 'important')
      };
    });
  };

  // done item
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this._toggleProperty(todoData, id, 'done')
      };
    });
  };

  render() {
    const { todoData, term, filter } = this.state;

    // filtered items ([search/filter])
    const visibleItems = this.filter(this._search(todoData, term), filter);

    // кол-во завершенных
    const doneCount = todoData.filter(item => {
      return item.done;
    }).length;

    // кол-во незавершенных
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

// =================================== PS =================================

// = js-code instead of jsx-code
// const el = React.createElement('h1', null, 'Hello World');
