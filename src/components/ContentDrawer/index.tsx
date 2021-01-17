import React, { useState } from "react";
import styled from "styled-components";

interface ContentDrawerProps {
  content: string;
}

const StyledDiv = styled.div<{ show: boolean }>`
  height: ${({ show }) => (!show ? "5rem" : "100%")};
  overflow: hidden;
  padding-bottom: 2rem;
`;

const StyledButton = styled.button`
  margin: 0.5rem 0 2rem;
  width: 100%;
  border: 0;
  background-color: transparent;
  outline: none;
  position: relative;
  color: ${({ theme }) => theme.text.main};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border-top: 1px solid;
    width: calc(50% - 2rem);
    left: 0;
    top: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    border-top: 1px solid;
    width: calc(50% - 2rem);
    right: 0;
    top: 50%;
  }
`;

export const ContentDrawer: React.FC<ContentDrawerProps> = ({
  content = "content!",
}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <StyledDiv show={show}>{content}</StyledDiv>
      {!show && <StyledButton onClick={() => setShow(true)}>More</StyledButton>}
    </div>
  );
};
