import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`/events.json`);
  const events = await res.json();

  return { events };
};
