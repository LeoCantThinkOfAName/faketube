import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }

  50% {
    transform: rotate(180deg);
    opacity: 1;
  }

  100% {
    transform: rotate(360deg);
    opacity: 0;
  }
`;

const StyledSpinner = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
  font-size: 3rem;
  color: ${({ theme }) => theme.main};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner: React.FC<SpinnerProps> = () => {
  return <StyledSpinner />;
};
