import { writable } from "svelte/store";
import type { Event } from "@types";

export const events = writable<Event[]>([]);
export const upcoming = writable<Event | null>(null);

let isLoaded = false;

export async function loadEvents() {
  if (isLoaded) return;

  const now = new Date();

  const response = await fetch("/Json/events.json");
  const data: Event[] = await response.json();

  // Process events: sort and find the upcoming event
  const sortedEvents = data
    .map((event) => ({
      ...event,
      dateTime: new Date(`${event.date} ${event.time}`),
    }))
    .filter((event) => event.dateTime >= now)
    .sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

  // Set the stores
  events.set(sortedEvents.map(({ dateTime, ...event }) => event)); // Remove dateTime
  upcoming.set(sortedEvents.length > 0 ? sortedEvents[0] : null);

  isLoaded = true;
}
