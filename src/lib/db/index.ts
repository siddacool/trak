import type { Show } from '$lib/features/show/types/show';
import { Dexie, type EntityTable } from 'dexie';

const db = new Dexie('trak') as Dexie & {
  shows: EntityTable<
    Show,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  shows: '++id, sourceId', // primary key "id" (for the runtime!)
});

export { db };
