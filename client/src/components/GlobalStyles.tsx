import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

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
