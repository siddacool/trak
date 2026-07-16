import type { Show, ShowUpdatableFields } from '../types/show';
import { addShow as addShowDb, getShowById, removeShow as removeShowDb, updateShow } from '../db';

export function addShow(data: Show) {
  return addShowDb(data);
}

export function removeShow(sourceId: string) {
  return removeShowDb(sourceId);
}

export async function updateShowFields(sourceId: string, data: Partial<ShowUpdatableFields>) {
  const show = await getShowById(sourceId);

  return updateShow({
    ...show,
    ...data,
  });
}
