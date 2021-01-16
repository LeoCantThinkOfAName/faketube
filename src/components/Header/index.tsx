import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader>
      <h1>FakeTube</h1>
    </StyledHeader>
  );
};
