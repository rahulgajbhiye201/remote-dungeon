export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  link: string;
  pubDate: string;
  category: string;
  description: string;
};

export type CategoryCount = {
  [key: string]: number; // Defines an index signature
};
