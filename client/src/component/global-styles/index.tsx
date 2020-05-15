import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    font-display:'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size : 10px;
  }
  
  body {
    margin: 0;
    user-select : none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
