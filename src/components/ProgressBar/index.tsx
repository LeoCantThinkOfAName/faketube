import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
  duration: number;
  seekTo: (amount: number, type?: "seconds" | "fraction" | undefined) => void;
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

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  duration,
  seekTo,
}) => {
  const progress = useRef<HTMLDivElement | null>(null);

  const hello = (e: MouseEvent) => {
    e.stopPropagation();
    if (e.target) {
      // @ts-ignore
      const offset = e.target.offsetParent.offsetLeft;
      // @ts-ignore
      const width = e.target.offsetWidth;
      // console.log((e.pageX - offset) / width) * duration);
      seekTo(Math.floor((Math.floor(e.pageX - offset) / width) * duration));
    }
  };

  useEffect(() => {
    if (progress.current) {
      progress.current.addEventListener("click", hello);
    }

    return () => {
      if (progress.current) {
        progress.current.removeEventListener("click", hello);
      }
    };
  }, [progress]);

  return (
    <StyledDiv ref={progress}>
      <StyledBackground />
      <StyledSeeker style={{ transform: `translateX(${percentage}%)` }} />
    </StyledDiv>
  );
};
