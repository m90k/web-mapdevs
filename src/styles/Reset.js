import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
 ::placeholder{
   text-transform: uppercase;
   font-size: 0.625em;
 }

  *{
    margin: 0; padding: 0; outline: 0; box-sizing: border-box;
  }

  body, html, #root{
    height: 100vh;
  }

  body{
    background-color: #FFF;
  }

  input, body, button{
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
  }
`;

export default Reset;
