import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    wdith: 100%;  
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text.main};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: all 0.25s linear;
  }
  
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
  }
  
  main {
    flex-grow: 1;
    display: flex;
    position: relative;
  }

  header,
  main,
  footer {
    flex-shrink: 0;
  }
  `;