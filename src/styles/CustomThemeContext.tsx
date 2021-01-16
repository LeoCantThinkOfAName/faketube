import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalTheme, lightTheme } from "./theme";

export interface ICustomThemeContext {
  setTheme: React.Dispatch<React.SetStateAction<GlobalTheme>>;
}

export const CustomThemeContext = React.createContext<ICustomThemeContext>({
  setTheme: () => {},
});

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <CustomThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
