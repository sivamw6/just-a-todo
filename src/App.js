
import React from 'react';
import "./App.css";
import { TodoList } from "./components/Todo/TodoList";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <form></form>
      </header>
      <TodoList />
    </div>
  );
};

export { App };
