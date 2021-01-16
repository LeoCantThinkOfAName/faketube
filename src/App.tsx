import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>content</Layout>
    </ThemeProvider>
  );
}

export default App;
