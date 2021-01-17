import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RouteParams } from "../../Routes";

import { YoutubeVideo } from "../../types/youtube";
import { Spinner } from "../Spinner";
import { VideoListItem } from "../VideoListItem";

interface VideoListProps {
  loading?: boolean;
  list?: YoutubeVideo[];
}

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

export const VideoList: React.FC<VideoListProps> = ({
  loading = true,
  list = [],
}) => {
  const { page } = useParams<RouteParams>();

  return (
    <StyledDiv>
      {loading && <Spinner />}
      <StyledUl>
        {(page === undefined || parseInt(page) === 1) &&
          list.map((video, index) => {
            if (index < 12) {
              return <VideoListItem key={video.id} video={video} />;
            }
          })}
        {parseInt(page) > 1 &&
          list.map((video, index) => {
            if (
              index >= (parseInt(page) - 1) * 12 &&
              index < parseInt(page) * 12
            ) {
              return <VideoListItem key={video.id} video={video} />;
            }
          })}
      </StyledUl>
    </StyledDiv>
  );
};
