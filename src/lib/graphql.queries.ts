import { gql } from "@apollo/client";

export const GET_ALL_JOBS_COUNT = gql`
  query ($first: Int!, $after: String, $category: String) {
    getAllJobs(first: $first, after: $after, category: $category) {
      edges {
        cursor
        node {
          id
          title
          company
          jobType
          link
          location
          pubDate
          category
          skills
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      allJobsCount
      categoryCounts {
        category
        count
      }
    }
  }
`;
