import ReactTimeAgo from "react-time-ago";
import Skill from "./skill";
import { Job } from "../../../../constants/types";

const JobCard = ({
  title,
  company,
  location,
  jobType,
  link,
  pubDate,
  category,
  skills,
}: Job) => {
  const date = new Date(pubDate);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center rounded-sm border border-solid p-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-base font-medium">{company}</span>
          <span className="ita min-w-24 text-base">
            <ReactTimeAgo date={date} locale="en-US" />
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-sm italic tracking-wider">
            {category} | {jobType} | {location}
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {skills.map((item) => {
            return <Skill key={item} skillName={item} />;
          })}
        </div>
      </div>
    </a>
  );
};

export default JobCard;
