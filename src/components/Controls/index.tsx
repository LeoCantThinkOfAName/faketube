import React, { useEffect } from "react";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiPause,
  FiPlay,
  FiVolumeX,
  FiVolume2,
} from "react-icons/fi";
import styled from "styled-components";
import { ReactPlayerProps } from "react-player";
import { ProgressBar } from "../ProgressBar";
import { FaRegHeart, FaHeart } from "react-icons/fa";

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
}) => {
  useEffect(() => {
    if (player) {
      console.log("player ready");
      window.addEventListener("focus", autoplay);
    }

    return () => {
      window.removeEventListener("focus", autoplay);
    };
  }, [player]);

  const autoplay = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

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
      <ProgressBar percentage={progress.played * 100} />
      <StyledTime>{displayTime(progress.playedSeconds)}</StyledTime>
      <StyledButton
        onClick={() => setMuted(!muted)}
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? <FiVolumeX /> : <FiVolume2 />}
      </StyledButton>
      <StyledButton
      // onClick={() => setMuted(!muted)}
      >
        <FaRegHeart />
      </StyledButton>
    </StyledDiv>
  );
};
