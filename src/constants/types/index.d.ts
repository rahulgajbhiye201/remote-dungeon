type PageInfo = {
  hasNextPage: boolean;
  endCursor: string;
};

type JobEdge = {
  cursor: string;
  node: Job!;
};

type JobConnection = {
  edges: [JobEdge!]!;
  pageInfo: PageInfo!;
  allJobsCount: number!;
  categoryCounts: [CategoryCount!]!;
};

type CategoryCount = {
  category: string!;
  count: number!;
};

export type Job = {
  id?: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  link: string;
  pubDate: string;
  category?: string;
  skills: [string];
};

export type JobData = {
  getAllJobs: JobConnection!;
};

export type JobState = {
  data: JobData | null; // The data should match the `JobData` type
  loading: boolean;
  error: string | null;
};

export type OptionType = {
  label: string;
  value: string;
};
