import React from "react";
import { Pagination } from "../components/Pagination";
import { SearchInput } from "../components/SearchInput";

interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = ({}) => {
  return (
    <div>
      <SearchInput />
      <Pagination />
    </div>
  );
};
