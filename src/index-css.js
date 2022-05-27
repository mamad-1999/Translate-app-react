import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: Yekan, Poppins;
}

body {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    color: #ffff;
}
`

export { GlobalStyle }