import { createGlobalStyle } from "styled-components";
import { DARK_COLOR, LIGHT_COLOR } from "../constants";
import { isDark } from "../selectors";

export const GlobalStyle = createGlobalStyle`
  body, html {
    min-height: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${props => (isDark(props) ? DARK_COLOR : LIGHT_COLOR)};
    color: ${props => (isDark(props) ? LIGHT_COLOR : DARK_COLOR)};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
