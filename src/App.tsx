import React from "react";

import { Routes } from "./Routes";
import { CustomThemeProvider } from "./styles/CustomThemeContext";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Routes />
    </CustomThemeProvider>
  );
};

export default App;
