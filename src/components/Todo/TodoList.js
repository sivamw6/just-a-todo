import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import Button from './../Button/Button'
import './TodoList.css'

export const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // Add
  const handleAddTodo = () => {
    setTodos([...todos, {id: Date.now(), text:newTodo}])
    setNewTodo('')
  }

  // Remove
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id!==id))
  }

  // Edit
  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, text:newText}
      }
      return todo
    }))
  }


  return (
    <div>
      <div className='input-container'>
        <input
        type = "text"
        value = {newTodo}
        onChange = {(e)=>setNewTodo(e.target.value)}
        />
        <Button text="＋" onClick={handleAddTodo}/>

      </div>
      { todos.length === 0
      ? <p>No to-do items yet!</p>
      : todos.map(todo=>(
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onEdit={handleEdit}/>
      ))}
    </div>
  )
}

