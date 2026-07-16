import { fetchShowsSearchResult } from '../api/search';
import type { Show } from '../types/show';

function createShowSearchListStore() {
  let shows = $state<Show[]>([]);

  return {
    get shows() {
      return shows;
    },
    async search(searchQuery: string) {
      try {
        const data = await fetchShowsSearchResult(searchQuery);

        shows = data;
      } catch (e) {
        return Promise.reject(e);
      }
    },
  };
}

export const showSearchListStore = createShowSearchListStore();
