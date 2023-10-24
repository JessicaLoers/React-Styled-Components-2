import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  color: black;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};
  padding: 0.6rem 1rem;
  cursor: pointer;
  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-button);
    `}

  ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--color-button);
      color: #fff;
    `}


  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-button);
      border: 1px solid var(--color-button);
    `}

    // 3. Variante:

  &:hover {
    background-color: var(--color-secondary);
  }
`;
