import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  &,
  &::before, 
  &::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Lato", sans-serif;
  }
`;

export default GlobalStyle;
