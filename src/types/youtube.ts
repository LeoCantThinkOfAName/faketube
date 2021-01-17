export interface YoutubeThumbnail {
  high: {
    url: string;
    width: number;
    height: number;
  }
}

export interface YoutubeSnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnail;
}

export interface YoutubeVideoDetail {
  duration: string;
}

export interface YoutubeVideo {
  id: string;
  snippet: YoutubeSnippet;
  contentDetails: YoutubeVideoDetail;
}

export interface YoutubeSearchedVideo {
  id: {
    videoId: string;
  },
  snippet: YoutubeSnippet
}

export interface YoutubeResponse {
  items: YoutubeVideo[];
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  }
}

export interface YoutubeGeneral {
  items: any[];
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  }
}

export interface YoutubeSearchResponse {
  items: YoutubeSearchedVideo[];
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  }
}