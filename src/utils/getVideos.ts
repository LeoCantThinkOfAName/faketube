import { YoutubeGeneral, YoutubeResponse } from "../types/youtube"
import { setSessionStorage } from "./setSessionStorage";

interface QueryParams {
  type?: "/videos?chart=mostPopular" | "/search?";
  term?: string | null;
  resultsPerPage?: number; 
}

export const getVideos = async <T extends YoutubeGeneral>({type = "/videos?chart=mostPopular", term = null, resultsPerPage = 50}: QueryParams): Promise<T> => {
  const base = "https://youtube.googleapis.com/youtube/v3";

  // I should probably make a abstraction for this, but imma gonna hardcode it for the sake of time saving.
  const firstHalf = await fetch(`${base}${type}${term ? "&q=" + term : ""}&regionCode=TW&key=${process.env.REACT_APP_API}&maxResults=${resultsPerPage}&part=snippet${type !== "/search?" ? "&part=contentDetails" : ""}${type === "/search?" ? "&type=video" : ""}`).then(res => res.json()) as T;
  const secondHalf = await fetch(`${base}${type}${term ? "&q=" + term : ""}&regionCode=TW&key=${process.env.REACT_APP_API}&maxResults=${resultsPerPage}&part=snippet${type !== "/search?" ? "&part=contentDetails" : ""}&pageToken=${firstHalf.nextPageToken}${type === "/search?" ? "&type=video" : ""}`).then(res => res.json()) as T;

  firstHalf.items = [...firstHalf.items, ...secondHalf.items];

  setSessionStorage(type, firstHalf);
  return firstHalf;
}