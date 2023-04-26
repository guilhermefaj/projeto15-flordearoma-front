import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
}
a{
    text-decoration: none;
    outline: none;
}
`

export default GlobalStyle