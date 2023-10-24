import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #f4f6f7;
    --color-secondary: #d7dbd7dd;
    --color-danger: #f44336;
    --color-button: #1a237e 
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
