import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "../../context/SearchContext";

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
  const { setTerm } = useContext(SearchContext);
  const history = useHistory();

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push("/search/1");
      }}
    >
      <StyledDiv>
        <input
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
        />
        <button>
          <FaSearch />
        </button>
      </StyledDiv>
    </form>
  );
};
