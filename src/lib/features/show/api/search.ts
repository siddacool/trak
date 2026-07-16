import type { Show } from '../types/show';
import type { TvMazeShowSearchItem } from '../types/tvmaze';
import { convertTvMazeShowsSearchResult } from '../utils/convert-tvmaze-show';

export async function fetchTvMazeShowsSearchResult(
  searchQuery: string,
): Promise<TvMazeShowSearchItem[]> {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`,
  );

  if (!response.ok) {
    throw new Error(`TVMaze API error: ${response.status}`);
  }

  const responseData: TvMazeShowSearchItem[] = await response.json();

  return responseData;
}

export async function fetchShowsSearchResult(searchQuery: string): Promise<Show[]> {
  const responseData = await fetchTvMazeShowsSearchResult(searchQuery);

  return convertTvMazeShowsSearchResult(responseData);
}
