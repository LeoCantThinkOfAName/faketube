import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

interface AdvertProps {
  show?: boolean;
  setAdvert: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.8);
  width: 100%;
  padding: 1rem;
  height: 20%;
  color: #fff;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: ${({ theme }) => theme.typography.lg};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  outline: none;
`;

export const Advert: React.FC<AdvertProps> = ({ show = false, setAdvert }) => {
  if (show) {
    return (
      <StyledDiv>
        <div>
          The API uses cursor based pagination, there's no real reason to create
          an offset based pagination UI...
        </div>
        <StyledButton onClick={() => setAdvert(!Advert)}>
          <AiOutlineCloseCircle />
        </StyledButton>
      </StyledDiv>
    );
  } else {
    return null;
  }
};
