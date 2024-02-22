import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
`;
const Button = ({ onClick, text }: { onClick: () => void, text: string }) => 
  (   <StyledButton onClick={onClick}>
        {text}
      </StyledButton>
  );


export default Button;
