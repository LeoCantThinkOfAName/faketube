export const getVideos = () => {
  return fetch("https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=TW&key=AIzaSyBjbwnprAX7xA7XxMpg1l1-kyhNCq67mzc&maxResults=50&part=snippet&part=contentDetails").then(res => res.json());
}