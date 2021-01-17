import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RouteParams } from "../../Routes";

import { YoutubeSearchedVideo, YoutubeVideo } from "../../types/youtube";
import { Spinner } from "../Spinner";
import { VideoListItem } from "../VideoListItem";

interface VideoListProps {
  loading?: boolean;
  list?: YoutubeVideo[] | null;
  search?: YoutubeSearchedVideo[] | null;
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
  list = null,
  search = null,
}) => {
  const { page } = useParams<RouteParams>();

  if (list) {
    return (
      <StyledDiv>
        {loading && <Spinner />}
        <StyledUl>
          {(page === undefined || parseInt(page) === 1) &&
            list.map((video, index) => {
              if (index < 12) {
                return <VideoListItem key={video.id} video={video} />;
              }
              return null;
            })}
          {parseInt(page) > 1 &&
            list.map((video, index) => {
              if (
                index >= (parseInt(page) - 1) * 12 &&
                index < parseInt(page) * 12
              ) {
                return <VideoListItem key={video.id} video={video} />;
              }
              return null;
            })}
        </StyledUl>
      </StyledDiv>
    );
  } else if (search) {
    return (
      <StyledDiv>
        {loading && <Spinner />}
        <StyledUl>
          {(page === undefined || parseInt(page) === 1) &&
            search.map((video, index) => {
              if (index < 12) {
                return (
                  <VideoListItem key={video.id.videoId} searchedVideo={video} />
                );
              }
              return null;
            })}
          {parseInt(page) > 1 &&
            search.map((video, index) => {
              if (
                index >= (parseInt(page) - 1) * 12 &&
                index < parseInt(page) * 12
              ) {
                return (
                  <VideoListItem key={video.id.videoId} searchedVideo={video} />
                );
              }
              return null;
            })}
        </StyledUl>
      </StyledDiv>
    );
  }
  return null;
};
