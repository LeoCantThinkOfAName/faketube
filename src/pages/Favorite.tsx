import React from "react";
import { Pagination } from "../components/Pagination";
import { SearchInput } from "../components/SearchInput";

interface FavoritePageProps {}

export const FavoritePage: React.FC<FavoritePageProps> = ({}) => {
  return (
    <div>
      <SearchInput />
      fav
      <Pagination />
    </div>
  );
};
