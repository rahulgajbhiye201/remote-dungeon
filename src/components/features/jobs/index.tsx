import { useEffect, useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

// Components, Types & Helper imports
import type { RootState } from "../../../lib/stores/store";
import JobCard from "../../ui/features/jobs/job-card";
import { GET_ALL_JOBS_COUNT } from "../../../lib/graphql.queries";

import {
  fetchDataStart,
  fetchDataFailure,
  fetchDataSuccess,
} from "../../../lib/slices/data.slice";

import { Job } from "../../../constants/types";
import { debounce } from "../../../lib/utils";

const Jobs = () => {
  // Initialize redux dispatch
  const dispatch = useDispatch();
  // Local states
  const [loadingMore, setLoadingMore] = useState(false);
  // Data fetching from global states
  const { category } = useSelector((state: RootState) => state.filter);
  // Query to fetch data from graphql server.
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_JOBS_COUNT, {
    variables: { first: 10, category: category },
  });

  // Update data in store
  useEffect(() => {
    if (loading) {
      dispatch(fetchDataStart());
    }
    if (error) {
      dispatch(fetchDataFailure(error.message));
    }
    if (data) {
      dispatch(fetchDataSuccess(data));
    }
  }, [loading, error, data, fetchMore, dispatch]);

  // Fetch more jobs
  const loadMoreJobs = useCallback(() => {
    if (data && data.getAllJobs.pageInfo.hasNextPage && !loadingMore) {
      setLoadingMore(true);
      fetchMore({
        variables: {
          first: 10,
          after: data.getAllJobs.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          setLoadingMore(false);
          if (!fetchMoreResult) return previousResult;

          return {
            getAllJobs: {
              ...fetchMoreResult.getAllJobs,
              edges: [
                ...previousResult.getAllJobs.edges,
                ...fetchMoreResult.getAllJobs.edges,
              ],
            },
          };
        },
      }).catch(() => {
        setLoadingMore(false);
      });
    }
  }, [data, fetchMore, loadingMore]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.scrollHeight
      ) {
        loadMoreJobs();
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreJobs]);

  // Data validation
  if (loading)
    return (
      <div className="flex h-20 w-full items-center justify-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#ff9933"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No jobs available</p>;

  const jobsData = data.getAllJobs.edges;

  return (
    <>
      {jobsData.map(({ node }: { node: Job }) => {
        return (
          <JobCard
            key={node.id}
            title={node.title}
            company={node.company}
            jobType={node.jobType}
            link={node.link}
            location={node.location}
            pubDate={node.pubDate}
            category={node.category}
            skills={node.skills}
          />
        );
      })}
      <div className="flex h-20 w-full items-center justify-center">
        {loadingMore ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#ff9933"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <>
            {!data.getAllJobs.pageInfo.hasNextPage && <p>That's all folks</p>}
          </>
        )}
      </div>
    </>
  );
};

export default Jobs;
