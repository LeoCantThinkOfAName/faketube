import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Advert } from "../components/Advert";
import { ContentDrawer } from "../components/ContentDrawer";
import { Controls } from "../components/Controls";
import { Spinner } from "../components/Spinner";
import { RouteParams } from "../Routes";
import { YoutubeResponse } from "../types/youtube";
import { getVideo } from "../utils/getVideo";

interface WatchPageProps {}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  video {
    outline: none;
    line-height: 0;
  }
`;

const StyledArticle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;
`;

export const WatchPage: React.FC<WatchPageProps> = () => {
  const player = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [advert, setAdvert] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState<{
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }>({ played: 0, playedSeconds: 0, loaded: 0, loadedSeconds: 0 });
  const { id } = useParams<RouteParams>();
  const { isLoading, data } = useQuery<YoutubeResponse>(id, () => getVideo(id));

  return (
    <StyledDiv>
      {isLoading && <Spinner />}
      {!isLoading && (
        <StyledArticle>
          <VideoWrapper>
            <ReactPlayer
              ref={player}
              width="100%"
              height="100%"
              muted={muted}
              playing={playing}
              onPause={() => setAdvert(true)}
              onEnded={() => setAdvert(true)}
              onProgress={(data) => setProgress(data)}
              url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
            />
            <Advert show={advert} setAdvert={setAdvert} />
          </VideoWrapper>
          {player.current && (
            <Controls
              data={data?.items[0]}
              player={player.current}
              playing={playing}
              setPlaying={setPlaying}
              seekTo={player.current.seekTo}
              getCurrentTime={player.current.getCurrentTime}
              muted={muted}
              setMuted={setMuted}
              progress={progress}
              getDuration={player.current.getDuration}
            />
          )}
          <h2>{data?.items[0].snippet.title}</h2>
          <ContentDrawer content={data?.items[0].snippet.description || ""} />
        </StyledArticle>
      )}
    </StyledDiv>
  );
};
