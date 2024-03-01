import styled from "styled-components";

export const DeleteButtonStyled = styled.button`
background: #d62e57;
  border-radius: 50px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  font-weight: bold;
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.15rem 0;
  transition: all 200ms ease-in-out;
  width: 5rem;
  height: 1.5rem;

  &:hover {
    filter: brightness(0.85);
  }
  &:active {
    filter: brightness(1);
  }
`