import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

interface PaginationProps {}

const StyledDiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledOl = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;

const StyledLi = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;

  a {
    transition: all 0.3s ease-in-out;
    border: 1px solid ${({ theme }) => theme.main};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    min-width: 2rem;
    text-decoration: none;
    margin: 0 0.25rem;
    color: ${({ theme, active }) =>
      active ? theme.text.contrast : theme.main};
    ${({ theme, active }) =>
      active ? "background-color:" + theme.main + ";" : null}

    &:hover {
      color: ${({ theme }) => theme.text.contrast};
      background: ${({ theme }) => theme.main};
    }
  }
`;

export const Pagination: React.FC<PaginationProps> = ({}) => {
  return (
    <StyledDiv>
      <StyledOl>
        <StyledLi active={false}>
          <Link to="/">
            <FiChevronLeft />
          </Link>
        </StyledLi>
        <StyledLi active={true}>
          <Link to="/">1</Link>
        </StyledLi>
        <StyledLi active={false}>
          <Link to="/">1</Link>
        </StyledLi>
        <StyledLi active={false}>
          <Link to="/">1</Link>
        </StyledLi>
        <StyledLi active={false}>
          <Link to="/">
            <FiChevronRight />
          </Link>
        </StyledLi>
      </StyledOl>
    </StyledDiv>
  );
};
