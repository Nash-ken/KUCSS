export type Event = {
  name: string;
  time: string;
  date: string;
  room: string;
  type: string;
};

export type Project = {
  title: string;
  description: string;
  skills: string[];
  prerequisites: string[];
  role: string;
};

export type Course = {
  title: string;
  skills: string;
  duration: string;
  provider: string;
  icon: string;
  link: string;
};
