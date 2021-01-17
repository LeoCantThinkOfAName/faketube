import React from "react";
import { Pagination } from "../components/Pagination";
import { VideoList } from "../components/VideoList";
import { getLocalStorage } from "../utils/getLocalStorage";

interface FavoritePageProps {}

export const FavoritePage: React.FC<FavoritePageProps> = () => {
  const favs = getLocalStorage("favs");

  return (
    <div>
      <VideoList list={favs} loading={false} />
      <Pagination items={favs} />
    </div>
  );
};
