import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaStar } from "react-icons/fa";

interface NavProps {}

const StyledDrawer = styled.div`
  width: 15rem;
  background-color: ${({ theme }) => theme.sub};
  position: sticky;
  top: 3.85rem;
  height: calc(100vh - 4rem);

  ul {
    padding: 0.5rem 0;
    margin: 0;
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text.main};
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: ${({ theme }) => theme.body};
  }

  &:hover {
    background-color: ${({ theme }) => theme.body};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const Nav: React.FC<NavProps> = ({}) => {
  const location = useLocation();

  return (
    <StyledDrawer>
      <ul>
        <li>
          <StyledLink
            className={location.pathname === "/" ? "active" : undefined}
            to="/"
          >
            <FaHome /> Index
          </StyledLink>
        </li>
        <li>
          <StyledLink
            className={location.pathname === "/favorite" ? "active" : undefined}
            to="/favorite"
          >
            <FaStar /> Favorite
          </StyledLink>
        </li>
      </ul>
    </StyledDrawer>
  );
};
