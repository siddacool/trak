import { listShows } from '../db';
import type { Show } from '../types/show';

function createShowListStore() {
  let shows = $state<Show[]>([]);

  return {
    get shows() {
      return shows;
    },
    async load() {
      try {
        const data = await listShows();

        shows = data;
      } catch (e) {
        return Promise.reject(e);
      }
    },
  };
}

export const showListStore = createShowListStore();
