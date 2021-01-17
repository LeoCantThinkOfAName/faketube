import React, { useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";

import { CustomThemeContext } from "../../styles/CustomThemeContext";
import { darkTheme, lightTheme } from "../../styles/theme";

interface SwitchProps {}

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text.contrast};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.xl};
`;

export const Switch: React.FC<SwitchProps> = () => {
  const themes = useMemo(() => {
    return {
      light: lightTheme,
      dark: darkTheme,
    };
  }, []);
  const [current, setCurrent] = useState<"light" | "dark">("light");
  const { setTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    setTheme(themes[current]);
  }, [current]);

  return (
    <div>
      <StyledLabel>
        {current === "light" ? <FiMoon /> : <FiSun />}
        <input
          type="checkbox"
          style={{ display: "none" }}
          onChange={() => setCurrent(current === "light" ? "dark" : "light")}
        />
      </StyledLabel>
    </div>
  );
};
