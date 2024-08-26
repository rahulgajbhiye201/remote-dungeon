import { fetchingAndCaching, findUnique, convertJobSchema } from "./utils";
import { jobSources } from "../configs/constant.config";
import { Job, CategoryCount } from "./types";

const resolvers = {
  Query: {
    getAllJobs: async (_: any, { first, after, category = "" }: any) => {
      // Data fetching
      const allJobs = await fetchingAndCaching(jobSources);
      // Finding unique Jobs.
      const uniqueJobs = findUnique(allJobs);
      // Converting different schemas to a general one.
      const convertedJobs = convertJobSchema(uniqueJobs);
      // Variable to response after all the data mutation
      let JobsData;

      // Filter jobs by category
      if (category) {
        JobsData = convertedJobs.filter(
          (job) => job.category.toLowerCase() === category.toLowerCase()
        );
      } else {
        JobsData = convertedJobs;
      }

      // Sort jobs by time
      const sortedJobs = [...JobsData].sort(
        (a: { pubDate: string }, b: { pubDate: string }) => {
          return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        }
      );

      // Implement pagination
      const edges = sortedJobs.map((job) => ({
        cursor: job.id, // Assuming job.id is unique and suitable for cursor
        node: job,
      }));

      // Determine start index based on the 'after' cursor
      let startIndex = 0;
      if (after) {
        const afterIndex = edges.findIndex((edge) => edge.cursor === after);
        startIndex = afterIndex + 1; // Start after the specified cursor
      }

      // Slice edges to get the requested number of jobs
      const paginatedEdges = edges.slice(startIndex, startIndex + first);

      // Determine pagination info
      const endCursor =
        paginatedEdges.length > 0
          ? paginatedEdges[paginatedEdges.length - 1].cursor
          : null;
      const hasNextPage = startIndex + first < edges.length;

      // Counts
      const categoryCounts: CategoryCount = convertedJobs.reduce(
        (acc: CategoryCount, job: Job) => {
          const cat: string = job.category || "Uncategorized";
          if (!acc[cat]) {
            acc[cat] = 0;
          }
          acc[cat]++;
          return acc;
        },
        {} as CategoryCount
      );
      // Convert categoryCounts object to an array
      const categoryCountsArray = Object.entries(categoryCounts).map(
        ([category, count]) => ({
          category,
          count,
        })
      );

      return {
        edges: paginatedEdges,
        pageInfo: {
          hasNextPage,
          endCursor,
        },
        allJobsCount: uniqueJobs.length,
        categoryCounts: categoryCountsArray,
      };
    },
  },
};

export default resolvers;
