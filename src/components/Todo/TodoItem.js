import React, {useState} from 'react';
import Button from '../Button/Button';
import './TodoItem.css';

function TodoItem({ todo, onDelete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e)=> setEditedText(e.target.value)}

        />
      ) : (
        <div>
          <input
            type="checkbox" 
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
            <span className={isChecked ? ('completed') : ('')}> {todo.text}</span>
          </div>
      )}
      <div className='button-container '>
      {isEditing ? (
        <Button text="✔️" onClick={()=>{
          onEdit(todo.id, editedText)
          setIsEditing(false)
        }}
        />
      ) : (
        <Button text="🖊️" onClick={()=>{
          setIsEditing(true)
        }}
        />
      )}
      <Button text="✖️" onClick={()=>onDelete(todo.id)} />
      </div>
    </div>
  )
}

export default TodoItem;