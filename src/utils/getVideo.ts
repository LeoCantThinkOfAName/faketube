import { YoutubeResponse } from "../types/youtube";

export const getVideo = (id: string): Promise<YoutubeResponse> => {
  const base = "https://www.googleapis.com/youtube/v3/videos"

  return fetch(`${base}?key=AIzaSyBjbwnprAX7xA7XxMpg1l1-kyhNCq67mzc&part=snippet&id=${id}`).then(res => res.json());
}