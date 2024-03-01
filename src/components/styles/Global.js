import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-color: #03091a;
    color: white;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.15em;
  }

  ul {
    list-style-type: none;
  }

  input {
    width: 25%;
    padding: 12px 20px;
    margin: 8px 0;
    background-color: #03091a;
    border-bottom: 1px solid #7ae7b6;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    color: white;
  }
`
export default GlobalStyles;