import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiPause,
  FiPlay,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { ReactPlayerProps } from "react-player";
import styled from "styled-components";

import { YoutubeVideo } from "../../types/youtube";
import { getLocalStorage } from "../../utils/getLocalStorage";
import { setLocalStorage } from "../../utils/setLocalStorage";
import { ProgressBar } from "../ProgressBar";

interface ControlsProps {
  player: React.Component<ReactPlayerProps, any>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playing: boolean;
  seekTo: (amount: number, type?: "seconds" | "fraction" | undefined) => void;
  getCurrentTime: () => number;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  progress: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  };
  data: YoutubeVideo | undefined;
  getDuration: () => number;
}

const StyledDiv = styled.div`
  height: 3rem;
  display: flex;
`;

const StyledTime = styled.div`
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.text.contrast};
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const StyledButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.text.contrast};
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Controls: React.FC<ControlsProps> = ({
  player,
  playing,
  setPlaying,
  seekTo,
  getCurrentTime,
  muted,
  setMuted,
  progress,
  data,
  getDuration,
}) => {
  const storedFavs = useMemo(() => getLocalStorage("favs"), []);
  const [favs, setFavs] = useState(storedFavs);

  const autoplay = useCallback(() => {
    if (!playing) {
      setPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (favs) {
      setLocalStorage("favs", favs);
    }
  }, [favs]);

  useEffect(() => {
    if (player) {
      console.log("player ready");
      window.addEventListener("focus", autoplay);
    }

    return () => {
      window.removeEventListener("focus", autoplay);
    };
  }, [player, autoplay]);

  const seeking = (direction: boolean) => {
    const currentTime = getCurrentTime();

    if (direction) {
      // forward
      seekTo(Math.abs(currentTime + 15));
    } else {
      // backward
      seekTo(Math.abs(currentTime - 15));
    }
  };

  const displayTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  return (
    <StyledDiv>
      {data && (
        <>
          <StyledButton onClick={() => seeking(false)} title="Fast Backward">
            <FiChevronsLeft />
          </StyledButton>
          <StyledButton
            title={playing ? "Pause" : "Play"}
            onClick={() => setPlaying(!playing)}
          >
            {playing ? <FiPause /> : <FiPlay />}
          </StyledButton>
          <StyledButton onClick={() => seeking(true)} title="Fast Forward">
            <FiChevronsRight />
          </StyledButton>
          <ProgressBar
            percentage={progress.played * 100}
            seekTo={seekTo}
            duration={getDuration()}
          />
          <StyledTime>{displayTime(progress.playedSeconds)}</StyledTime>
          <StyledButton
            onClick={() => setMuted(!muted)}
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? <FiVolumeX /> : <FiVolume2 />}
          </StyledButton>
          <StyledButton
            onClick={() => {
              if (favs) {
                if (
                  favs.findIndex((fav: YoutubeVideo) => fav.id === data.id) !==
                  -1
                ) {
                  setFavs(
                    favs.filter((fav: YoutubeVideo) => fav.id !== data.id),
                  );
                } else {
                  setFavs([...favs, data]);
                }
              } else {
                setFavs([data]);
              }
            }}
          >
            {favs &&
            favs.findIndex((fav: YoutubeVideo) => fav.id === data.id) !== -1 ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </StyledButton>
        </>
      )}
    </StyledDiv>
  );
};
