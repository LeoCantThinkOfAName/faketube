import React, { useContext } from "react";

import { CustomThemeContext } from "../../styles/CustomThemeContext";
import { darkTheme } from "../../styles/theme";

interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = ({}) => {
  const { setTheme } = useContext(CustomThemeContext);

  return (
    <div>
      <label>
        haha
        <input
          type="checkbox"
          style={{ display: "none" }}
          onChange={() => setTheme(darkTheme)}
        />
      </label>
    </div>
  );
};
