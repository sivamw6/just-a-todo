import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
`;

function Button({ onClick, text }) {
  return (
    <div>
      <StyledButton className="button-style" onClick={onClick}>
        {text}
      </StyledButton>
    </div>
  );
}

export default Button;
