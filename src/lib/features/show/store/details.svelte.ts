import { getShowById } from '../db';
import type { Show } from '../types/show';

function createShowDetailsStore() {
  let show = $state<Show | undefined>(undefined);

  return {
    get show() {
      return show;
    },
    async load(sourceId: string) {
      try {
        const data = await getShowById(sourceId);

        show = data;
      } catch (e) {
        return Promise.reject(e);
      }
    },
  };
}

export const showDetailsStore = createShowDetailsStore();
