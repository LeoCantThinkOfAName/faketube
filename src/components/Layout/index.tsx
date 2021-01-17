import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavContextProvider } from "../../context/NavContext";
import { SearchContextProvider } from "../../context/SearchContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { SearchInput } from "../SearchInput";

interface LayoutProps {}

const StyledDiv = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex: 1;
  padding: 1rem;
  overflow: auto;
  flex-direction: column;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <NavContextProvider>
      <Header />
      <main>
        <Nav />
        <StyledDiv>
          <SearchContextProvider>
            {!location.pathname.match("watch") && <SearchInput />}
            {children}
          </SearchContextProvider>
        </StyledDiv>
      </main>
      <Footer />
    </NavContextProvider>
  );
};
