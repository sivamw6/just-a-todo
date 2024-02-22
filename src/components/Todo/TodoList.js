import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import Button from "./../Button/Button";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Add
  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    console.log({ ...todos });
    setNewTodo("");
  };

  // Remove
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <InputDiv>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button text="＋" onClick={handleAddTodo} />
      </InputDiv>
      {todos.length === 0 ? (
        <p>No to-do items yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};
