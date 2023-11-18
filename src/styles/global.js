import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

body{
  width: 100vw;
  height: 100vh;

  font-size: 1.6rem;

  font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

`;