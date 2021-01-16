import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Nav } from "../Nav";

interface LayoutProps {}

const StyledDiv = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <StyledDiv>{children}</StyledDiv>
      </main>
      <Footer />
    </>
  );
};
