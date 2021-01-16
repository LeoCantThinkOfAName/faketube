import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Nav } from "../Nav";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
};
