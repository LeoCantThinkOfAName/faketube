import React from "react";
import { useQuery } from "react-query";

import { Pagination } from "../components/Pagination";
import { VideoList } from "../components/VideoList";
import { YoutubeResponse } from "../types/youtube";
import { getSessionStorage } from "../utils/getSessionStorage";
import { getVideos } from "../utils/getVideos";

interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = () => {
  const sessionData = getSessionStorage<YoutubeResponse>(
    "/videos?chart=mostPopular",
  );

  const { isLoading } = useQuery<YoutubeResponse>(
    "/videos?chart=mostPopular",
    async () =>
      getVideos({
        type: "/videos?chart=mostPopular",
        resultsPerPage: 50,
        term: null,
      }),
    { enabled: !sessionData },
  );

  return (
    <>
      <VideoList list={sessionData?.items} loading={isLoading} />
      {!isLoading && sessionData && <Pagination items={sessionData?.items} />}
    </>
  );
};
