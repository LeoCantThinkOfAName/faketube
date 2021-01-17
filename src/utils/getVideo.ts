import { YoutubeResponse } from '../types/youtube';

export const getVideo = (id: string): Promise<YoutubeResponse> => {
  const base = "https://www.googleapis.com/youtube/v3/videos"

  return fetch(`${base}?key=${process.env.REACT_APP_API}&part=snippet&part=contentDetails&id=${id}`).then(res => res.json());
}