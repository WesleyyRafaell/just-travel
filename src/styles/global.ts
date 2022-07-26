import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-display: swap;
    src: local(''),
        url('/fonts/circular-std-book-450.ttf') format('ttf'),
  }

  @font-face {
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/circular-std-medium-500.ttf') format('ttf'),
  }

  @font-face {
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/circular-std-bold700.ttf') format('ttf'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
