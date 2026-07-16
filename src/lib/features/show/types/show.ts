export type ShowExternalLinks = {
  tvrage?: string;
  thetvdb?: string;
  imdb?: string;
};

export type ShowPosters = {
  small?: string;
  large?: string;
};

export type Show = {
  id?: number;
  sourceId: string;
  url: string | undefined;
  name: string;
  language: string;
  genres: string[];
  runtime: number | undefined;
  premiered: string | undefined;
  ended: string | undefined;
  rating: number | undefined;
  externalLinks: ShowExternalLinks;
  description: string | undefined;
  posters: ShowPosters;
  updatedAt: number;
  createdAt: number;
};

export type ShowUpdatableFields = Omit<Show, 'id' | 'sourceId'>;
