import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  label {
    color: #6D2080;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 17.07px;
  }

  select {
    border: none;
    border-bottom: solid 1px rgb(0, 0, 0, 0.5);
    background-color: #fff;
    color: #8D8D8D;
    outline: none;
  }

  .container {
    padding: 0 10%;
  }

  .page-button-selected {
    background: #6D2080;
    color: rgb(255, 255, 255);
  }

  .arrow-pagination {
    width: 34px;
    height: 34px;
    border: none;
    background: rgb(255, 255, 255);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default GlobalStyle;