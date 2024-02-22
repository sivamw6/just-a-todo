import React, { useState } from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Span = styled.span`
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? "line-through" : "none"};
`;

const TodoItem = ({ todo, onDelete, onEdit, name }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <div>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <Span $isChecked={isChecked}> {todo.text}</Span>
        </div>
      )}
      <ButtonContainer>
        {isEditing ? (
          <Button
            text="✔️"
            onClick={() => {
              onEdit(todo.id, editedText);
              setIsEditing(false);
            }}
          />
        ) : (
          <Button
            text="🖊️"
            onClick={() => {
              setIsEditing(true);
            }}
          />
        )}
        <Button text="✖️" onClick={() => onDelete(todo.id)} />
        <p>{name}</p>
      </ButtonContainer>
    </Div>
  );
};

export { TodoItem };
