import React from "react";
import styled from "styled-components";
import { YoutubeVideo } from "../../types/youtube";
import { Link } from "react-router-dom";
import { parseDuration } from "../../utils/parseDuration";

interface VideoListItemProps {
  video: YoutubeVideo;
}

const StyledLi = styled.li`
  @media only screen and ${({ theme }) => theme.breakpoints.sm} {
    width: 50%;
  }

  @media only screen and ${({ theme }) => theme.breakpoints.md} {
    width: 33.333%;
  }

  @media only screen and ${({ theme }) => theme.breakpoints.lg} {
    width: 25%;
  }

  @media only screen and ${({ theme }) => theme.breakpoints.xl} {
    width: 20%;
  }

  padding: 1rem 0.5rem;

  figure {
    margin: 0;
  }

  img {
    width: 100%;
  }

  figcaption {
    width: 100%;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div {
    position: relative;
  }

  span {
    position: absolute;
    background-color: #000;
    color: #fff;
    font-size: ${({ theme }) => theme.typography.xs};
    padding: 0.25rem;
    bottom: 1rem;
    right: 0.25rem;
  }
`;

export const VideoListItem: React.FC<VideoListItemProps> = ({ video }) => {
  return (
    <StyledLi>
      <Link to="/">
        <figure>
          <div>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <span>{parseDuration(video.contentDetails.duration)}</span>
          </div>
          <figcaption>{video.snippet.title}</figcaption>
        </figure>
      </Link>
    </StyledLi>
  );
};
