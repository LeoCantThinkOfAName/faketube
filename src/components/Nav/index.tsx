import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaStar } from "react-icons/fa";
import { NavContext } from "../../context/NavContext";

interface NavProps {}

const StyledDrawer = styled.div<{ show: boolean }>`
  background-color: ${({ theme }) => theme.sub};
  transform: translateX(${({ show }) => (show ? "0" : "-15rem")});
  width: 15rem;
  position: absolute;
  top: 0;
  z-index: 99;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  @media only screen and ${({ theme }) => theme.breakpoints.md} {
    position: sticky;
    top: 3.85rem;
    height: auto;
    transform: translateX(0);
  }

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

export const Nav: React.FC<NavProps> = () => {
  const { show } = useContext(NavContext);
  const location = useLocation();

  return (
    <StyledDrawer show={show}>
      <ul>
        <li>
          <StyledLink
            className={
              location.pathname.match("/search") ||
              location.pathname === "/" ||
              !location.pathname.match("favorite")
                ? "active"
                : undefined
            }
            to="/"
          >
            <FaHome /> Index
          </StyledLink>
        </li>
        <li>
          <StyledLink
            className={
              location.pathname.match("/favorite") ? "active" : undefined
            }
            to="/favorite/1"
          >
            <FaStar /> Favorite
          </StyledLink>
        </li>
      </ul>
    </StyledDrawer>
  );
};
