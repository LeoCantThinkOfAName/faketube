import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { RouteParams } from "../../Routes";

interface PaginationProps {
  items: any[];
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const StyledOl = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLi = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

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

export const Pagination: React.FC<PaginationProps> = ({ items = [] }) => {
  const { page } = useParams<RouteParams>();
  const pages = Math.ceil(items.length / 12);

  return (
    <StyledDiv>
      <StyledOl>
        {page !== undefined && page !== "1" && (
          <StyledLi active={false}>
            <Link to={`./${page === undefined ? "./" : parseInt(page) - 1}`}>
              <FiChevronLeft />
            </Link>
          </StyledLi>
        )}
        {new Array(pages).fill(0, 0, pages).map((_, index) => (
          <StyledLi
            key={index}
            active={
              parseInt(page) === index + 1 ||
              (page === undefined && index === 0)
            }
          >
            <Link to={`./${index + 1}`}>{index + 1}</Link>
          </StyledLi>
        ))}
        {(parseInt(page) < pages || page === undefined) && (
          <StyledLi active={false}>
            <Link to={`./${page === undefined ? 2 : parseInt(page) + 1}`}>
              <FiChevronRight />
            </Link>
          </StyledLi>
        )}
      </StyledOl>
    </StyledDiv>
  );
};
