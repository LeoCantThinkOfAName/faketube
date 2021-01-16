import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

import { YoutubeVideo } from "../../types/youtube";
import { VideoListItem } from "../VideoListItem";

interface VideoListProps {
  loading?: boolean;
  list?: YoutubeVideo[];
}

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

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  margin-top: 2rem;
  align-items: start;
  justify-content: center;
  position: relative;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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

export const VideoList: React.FC<VideoListProps> = ({
  loading = true,
  list = [],
}) => {
  return (
    <StyledDiv>
      {loading && <StyledSpinner />}
      <StyledUl>
        {list.map((video) => (
          <VideoListItem key={video.id} video={video} />
        ))}
      </StyledUl>
    </StyledDiv>
  );
};
