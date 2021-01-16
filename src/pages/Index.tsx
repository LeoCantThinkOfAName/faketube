import React from "react";
import { useQuery } from "react-query";

import { Pagination } from "../components/Pagination";
import { SearchInput } from "../components/SearchInput";
import { VideoList } from "../components/VideoList";
import { YoutubeResponse } from "../types/youtube";
import { getVideos } from "../utils/getVideos";

interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = ({}) => {
  const { isLoading, data } = useQuery<YoutubeResponse>("popular", getVideos);

  return (
    <>
      <SearchInput />
      <VideoList list={data?.items} loading={isLoading} />
      {!isLoading && data && <Pagination />}
    </>
  );
};
