import { XMLParser } from "fast-xml-parser";
import NodeCache from "node-cache";

import { Job } from "./types";
import {
  technologiesKeyword,
  categoryMap,
  typeMap,
} from "../configs/constant.config";

const parser = new XMLParser();
const rssCache = new NodeCache();

export const fetchRSS = async (url: string) => {
  const data = await fetch(url);
  const rssText = await data.text();
  const parsedData = parser.parse(rssText);
  return parsedData.rss.channel.item;
};

export const fetchJobsFromSources = async (sources: string[]) => {
  // Fetch data from all provided sources
  const fetchPromises = sources.map((source) => fetchRSS(source));
  // Wait for all fetch promises to resolve
  const results = await Promise.all(fetchPromises);
  // Combine results into a single array
  const allJobs = results.flat(); // Use flat() to merge arrays

  return allJobs;
};

export const fetchingAndCaching = async (jobSources: string[]) => {
  let allJobs: Job[];

  if (rssCache.has("thirdPartyRSS")) {
    allJobs = rssCache.get("thirdPartyRSS") as Job[];
  } else {
    allJobs = await fetchJobsFromSources(jobSources);
    rssCache.set("thirdPartyRSS", allJobs);
  }

  return allJobs;
};

export const findUnique = (allJobs: Job[]): Job[] => {
  if (!allJobs) {
    return []; // Return an empty array if allJobs is undefined
  }

  const uniqueJobs: Job[] = [];
  const seenLinks = new Set<string>();

  for (const item of allJobs) {
    // Normalize the link: remove whitespace, trailing slashes, query parameters, and standardize to lowercase
    let normalizedLink = item.link
      .trim() // Remove whitespace
      .toLowerCase() // Convert to lowercase
      .replace(/\/$/, "") // Remove trailing slash
      .split("?")[0]; // Remove query parameters

    // Check if the normalized link has already been seen
    if (!seenLinks.has(normalizedLink)) {
      seenLinks.add(normalizedLink); // Add to seen links
      uniqueJobs.push(item); // Add the job to unique jobs
    }
  }

  return uniqueJobs;
};

export const convertJobSchema = (allJobs: Job[]) => {
  return allJobs.map((job: any) => {
    // Title
    const titleJob = (title: string) => {
      if (title.includes(":")) {
        title = title.substring(title.indexOf(":") + 2);
      }
      return title || "Unknown Title";
    };

    // Company
    const companyJob = (company: string, title: string) => {
      const companyName = title.substring(0, title.indexOf(":"));
      return company || companyName || "Unknown Company";
    };

    // Job Type
    const jobTypeJob = (type: string) => {
      type = typeMap.get(type) || type;
      return type;
    };

    // Categorize based on map and then modify based on title
    const categorizeJob = (category: string, title: string) => {
      // Convert category using the map
      category = categoryMap.get(category) || category;

      // Lowercase the title for case-insensitive matching
      const lowerTitle = title.toLowerCase();

      // Override category based on title keywords
      if (lowerTitle.includes("frontend")) {
        category = "Frontend Development";
      } else if (lowerTitle.includes("backend")) {
        category = "Backend Development";
      } else if (
        ["mobile", "ios", "android"].some((keyword) =>
          lowerTitle.includes(keyword)
        )
      ) {
        category = "App Development";
      } else if (
        ["fullstack", "full stack", "full-stack"].some((keyword) =>
          lowerTitle.includes(keyword)
        )
      ) {
        category = "Fullstack Development";
      }

      return category;
    };

    const skillFinder = (description: string, category: string) => {
      // Lowercase the description for case-insensitive matching
      const lowerDescription = description.toLowerCase();

      // Remove HTML tags
      const clearedDescription = lowerDescription.replace(/<[^>]*>/g, "");

      // Get keywords for the specified category
      const keywords =
        technologiesKeyword[category as keyof typeof technologiesKeyword];

      // Check if the category exists
      if (!keywords) {
        console.error(`Category "${category}" not found.`);
        return [];
      }

      // Find which keywords are in the description
      const foundKeywords = keywords.filter((keyword) =>
        new RegExp(`\\b${keyword}\\b`, "i").test(clearedDescription)
      );

      return [...new Set(foundKeywords)];
    };

    // All data after transform
    const title = titleJob(job.title);
    const company = companyJob(job.company, job.title);
    const jobType = jobTypeJob(job.type);
    const category = categorizeJob(job.category, job.title);
    const skills = skillFinder(job.description, category);

    return {
      id: job.guid || "Unknown ID",
      title: title,
      company: company,
      location: job.location || job.region || "Unknown location",
      jobType: jobType,
      link: job.link || "Unknown Link",
      pubDate: job.pubDate || "Unknown Date",
      category: category,
      skills: skills,
      description: job.description || "Unknown Description",
    };
  });
};
