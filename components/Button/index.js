// Importing the 'styled' object and 'css' helper function.
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  color: black;

  /*
  - Setting the background color of the button based on the '$color' prop.
  - If the '$color' prop is set to 'danger', use the CSS variable '--color-danger'.
  - Otherwise, use '--color-primary'. 
  */
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};
  padding: 0.6rem 1rem;
  cursor: pointer;

  /*
  - If the '$variant' prop is set to 'text', apply the following styles.
  - Using the 'css' helper function from 'styled-components' inside a template literal.
  - The 'css' function allows us to conditionally apply blocks of CSS based on props.
  - It provides a way to interpolate functions into our template literals,
  */
  ${(props) =>
    //Checking if the '$variant' prop is set to 'text'.
    props.$variant === "text" &&
    // If the condition is true, the following styles are applied using the 'css' helper function.
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

  &:hover {
    background-color: var(--color-secondary);
  }
`;

/* Recap:
The logical AND operator (&&) - a binary operator
- to test to expression for truthiness.
- returns 'true' onl if both of its operands are true
- true && true returns true
- true && false returns false
- false && true returns false
- false && false returns false
*/
