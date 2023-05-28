import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  html {
    scroll-behavior: smooth;
    font-family: ${(p) => p.theme.fontFamily.primary}, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
