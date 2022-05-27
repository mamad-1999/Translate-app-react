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

:root {
    --black: #333333;
    --white: #f5f5f5;
    --transition: 0.5s ease;
}

body {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};
}
`

export { GlobalStyle }