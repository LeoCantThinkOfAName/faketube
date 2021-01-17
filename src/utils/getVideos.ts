import { YoutubeResponse } from "../types/youtube"
import { setSessionStorage } from "./setSessionStorage";

interface QueryParams {
  type?: "/videos?chart=mostPopular" | "search";
  term?: string | null;
  resultsPerPage?: number; 
}

export const getVideos = async ({type = "/videos?chart=mostPopular", term = null, resultsPerPage = 50}: QueryParams): Promise<YoutubeResponse> => {
  const base = "https://youtube.googleapis.com/youtube/v3";

  const firstHalf = await fetch(`${base}${type}&regionCode=TW&key=AIzaSyBjbwnprAX7xA7XxMpg1l1-kyhNCq67mzc&maxResults=${resultsPerPage}&part=snippet&part=contentDetails`).then(res => res.json()) as YoutubeResponse;
  const secondHalf = await fetch(`${base}${type}&regionCode=TW&key=AIzaSyBjbwnprAX7xA7XxMpg1l1-kyhNCq67mzc&maxResults=${resultsPerPage}&part=snippet&part=contentDetails&pageToken=${firstHalf.nextPageToken}`).then(res => res.json()) as YoutubeResponse;

  firstHalf.items = [...firstHalf.items, ...secondHalf.items];

  setSessionStorage(type, firstHalf);
  return firstHalf;
}