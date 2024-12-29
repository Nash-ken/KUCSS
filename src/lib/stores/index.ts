export { loadEvents, upcoming } from "./events";
export { Projects } from "./learning";
export { Courses } from "./learning";

import { base } from "$app/paths";

export const pages = [
  { label: "Home", link: `${base}/` },
  { label: "Events", link: `${base}/Events` },
  { label: "Learning", link: `${base}/Learning` },
  { label: "About", link: `${base}/About` },
];
