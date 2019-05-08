import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        --color-main: ${props=> props.theme.colors.main};
        --color-secondary: ${props => props.theme.colors.secondary};
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-black: ${props => props.theme.colors.blackColor};
        --color-shadow: ${props => props.theme.colors.shadow};

        @media ${props => props.theme.mediaQueries.smallest} {
            font-size: 50%;
        }
        @media ${props => props.theme.mediaQueries.smaller} {
            font-size: 55%;
        }
        @media ${props => props.theme.mediaQueries.small} {
            font-size: 60%;
        }
    }

    body {
        font-family: Helvetica
    }
`;