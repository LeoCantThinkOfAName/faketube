import React, { useState } from "react";

export interface INavContext {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = React.createContext<INavContext>({
  show: false,
  setShow: () => {},
});

export const NavContextProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <NavContext.Provider value={{ show, setShow }}>
      {children}
    </NavContext.Provider>
  );
};
