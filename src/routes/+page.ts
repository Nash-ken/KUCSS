import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch(`Json/events.json`);
    const events = await res.json();

    console.log(events);
    return { events };
  } catch {
    throw error(404, {
      message: "Not Found",
    });
  }
};
