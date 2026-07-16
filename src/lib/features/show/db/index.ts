import { db } from '$lib/db';
import type { Show } from '../types/show';

export function listShows() {
  return db.shows.toArray();
}

export async function getShowById(sourceId: string) {
  const show = await db.shows.where({ sourceId }).first();

  if (!show) {
    throw new Error('Show not found');
  }

  return show;
}

export async function addShow(data: Show) {
  const now = Date.now();

  await db.shows.add({
    ...data,
    createdAt: now,
    updatedAt: now,
  });

  return data.sourceId;
}

export async function updateShow(data: Show) {
  await db.shows.update(data.id, {
    ...data,
    updatedAt: Date.now(),
  });

  return data.sourceId;
}

export async function removeShow(sourceId: string) {
  const show = await getShowById(sourceId);

  await db.shows.delete(show.id);

  return sourceId;
}
