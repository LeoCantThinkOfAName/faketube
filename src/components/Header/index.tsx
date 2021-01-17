import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Switch } from "../Switch";

interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  h1 {
    color: ${({ theme }) => theme.text.contrast};
    font-size: ${({ theme }) => theme.typography.xl};
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>FakeTube</h1>
      </Link>
      <Switch />
    </StyledHeader>
  );
};
