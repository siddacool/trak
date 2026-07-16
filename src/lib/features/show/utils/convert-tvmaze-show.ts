import type { Show } from '../types/show';
import type { TvMazeShow, TvMazeShowSearchItem } from '../types/tvmaze';

export function convertTvMazeShow(show: TvMazeShow, now: number): Show {
  const newShow: Show = {
    sourceId: `tvm-${show.id}`,
    url: show.url,
    name: show.name,
    language: show.language,
    genres: show.genres,
    runtime: show.runtime ? show.runtime : undefined,
    premiered: show.premiered ? show.premiered : undefined,
    ended: show.ended ? show.ended : undefined,
    rating: show.rating.average ? show.rating.average : undefined,
    externalLinks: {
      tvrage: show.externals.tvrage ? `${show.externals.tvrage}` : undefined,
      thetvdb: show.externals.thetvdb ? `${show.externals.thetvdb}` : undefined,
      imdb: show.externals.imdb ? show.externals.imdb : undefined,
    },
    description: show.summary ? show.summary : undefined,
    posters: {
      small: show.image?.medium,
      large: show.image?.original,
    },
    createdAt: now,
    updatedAt: now,
  };

  return newShow;
}

export function convertTvMazeShows(shows: TvMazeShow[]): Show[] {
  const newShows: Show[] = [];

  const now = Date.now();

  for (let i = 0; i < shows.length; i++) {
    newShows.push(convertTvMazeShow(shows[i], now));
  }

  return newShows;
}

export function convertTvMazeShowsSearchResult(shows: TvMazeShowSearchItem[]): Show[] {
  const newShows: Show[] = [];

  const now = Date.now();

  for (let i = 0; i < shows.length; i++) {
    newShows.push(convertTvMazeShow(shows[i].show, now));
  }

  return newShows;
}
