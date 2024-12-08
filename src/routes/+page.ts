import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`Json/events.json`);
  const events = await res.json();

  console.log(events);

  return { events };
};
