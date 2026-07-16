interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number | null;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

interface WebChannel {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string | null;
}

interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
}

interface Image {
  medium: string;
  original: string;
}

interface Link {
  href: string;
}

interface EpisodeLink extends Link {
  name?: string;
}

interface Links {
  self: Link;
  previousepisode?: EpisodeLink;
  nextepisode?: EpisodeLink;
}

export interface TvMazeShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: Country | null;
  externals: Externals;
  image: Image | null;
  summary: string | null;
  updated: number;
  _links: Links;
}

export type TvMazeShowSearchItem = {
  score: number;
  show: TvMazeShow;
};
