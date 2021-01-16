import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Routes } from "./Routes";
import { CustomThemeProvider } from "./styles/CustomThemeContext";
import { GlobalStyles } from "./styles/global";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <GlobalStyles />
        <Routes />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
