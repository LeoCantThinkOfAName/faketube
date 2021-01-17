import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Switch } from "../Switch";
import { FiMenu } from "react-icons/fi";
import { NavContext } from "../../context/NavContext";

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

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  margin: 0 0.5rem 0 0;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.text.contrast};
  font-size: ${({ theme }) => theme.typography.xl};
  padding: 0;
  outline: none;
  cursor: pointer;

  @media only screen and ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const Header: React.FC<HeaderProps> = () => {
  const { show, setShow } = useContext(NavContext);

  return (
    <StyledHeader>
      <div>
        <StyledButton onClick={() => setShow(!show)}>
          <FiMenu />
        </StyledButton>
        <Link to="/">
          <h1>FakeTube</h1>
        </Link>
      </div>
      <Switch />
    </StyledHeader>
  );
};
