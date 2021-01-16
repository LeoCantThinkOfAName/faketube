import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  placeholder?: string;
}

const StyledDiv = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.main};
  display: flex;
  width: 100%;

  input {
    border: 0;
    width: 100%;
    background-color: transparent;
    padding: 0.5rem;
    outline: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.main};
    min-width: 3rem;
  }
`;

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
}) => {
  return (
    <StyledDiv>
      <input placeholder={placeholder} />
      <button>
        <FaSearch />
      </button>
    </StyledDiv>
  );
};
