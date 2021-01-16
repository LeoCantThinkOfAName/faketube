import React from "react";
import styled from "styled-components";

interface FooterProps {}

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.main};
  padding: 1rem;
  color: ${({ theme }) => theme.text.contrast};
  text-align: center;
`;

export const Footer: React.FC<FooterProps> = ({}) => {
  return <StyledFooter>This is a very irrelevent footer</StyledFooter>;
};
