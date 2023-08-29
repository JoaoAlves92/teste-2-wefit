import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open sans, 'Roboto', sans-serif;

        &:focus {
            outline: none;
        }
    }

    div#root {
        height: 100vh;
    }
    
    body {
        background-color: ${props => props.theme.colors.background};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
