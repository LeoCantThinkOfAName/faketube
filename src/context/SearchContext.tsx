import React, { useState } from "react";

export interface ISearchContext {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<ISearchContext>({
  term: "",
  setTerm: () => {},
});

export const SearchContextProvider: React.FC = ({ children }) => {
  const [term, setTerm] = useState("");

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
