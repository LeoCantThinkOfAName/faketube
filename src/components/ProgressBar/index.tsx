import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

const StyledDiv = styled.div`
  border: 2px solid ${({ theme }) => theme.main};
  padding: 0;
  flex: 1;
  height: 2.5rem;
  position: relative;
  overflow: hidden;
`;

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.main};
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledSeeker = styled.div`
  background-color: ${({ theme }) => theme.main};
  opacity: 0.5;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <StyledDiv>
      <StyledBackground />
      <StyledSeeker style={{ transform: `translateX(${percentage}%)` }} />
    </StyledDiv>
  );
};
