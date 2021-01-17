import React, { useContext } from "react";
import { useQuery } from "react-query";

import { Pagination } from "../components/Pagination";
import { VideoList } from "../components/VideoList";
import { SearchContext } from "../context/SearchContext";
import { YoutubeSearchResponse } from "../types/youtube";
import { getSessionStorage } from "../utils/getSessionStorage";
import { getVideos } from "../utils/getVideos";

interface SearchPageProps {}

export const SearchPage: React.FC<SearchPageProps> = () => {
  const { term } = useContext(SearchContext);
  const sessionData = getSessionStorage<YoutubeSearchResponse>("/search?");

  const { isLoading } = useQuery<YoutubeSearchResponse>(
    "/search?",
    async () =>
      getVideos({
        type: "/search?",
        resultsPerPage: 50,
        term,
      }),
    { enabled: !sessionData },
  );

  return (
    <>
      <VideoList search={sessionData?.items} loading={isLoading} />
      {!isLoading && sessionData && <Pagination items={sessionData?.items} />}
    </>
  );
};
