import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

// Components, Types & Helper imports
import { filterOptions } from "../../../constants/configs/select.config";
import { fetchFilteredData } from "../../../lib/slices/filter.slice";
import { OptionType } from "../../../constants/types";
import type { RootState } from "../../../lib/stores/store";

const SearchBar = () => {
  // Initialize redux dispatch
  const dispatch = useDispatch();

  // Local states
  const [option, setOption] = useState<OptionType[]>(filterOptions);
  const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);
  const [jobsCount, setJobsCount] = useState<number>(0);

  // Data fetching from global states
  const { data, loading } = useSelector((state: RootState) => state.data);

  // Update counts of job
  useEffect(() => {
    if (data) {
      const updatedOptions = filterOptions.map((option) => {
        const count = data.getAllJobs.categoryCounts.filter(
          (item: { category: string }) => item.category === option.value,
        ); // Get the count for the specific category
        return {
          ...option,
          label:
            count.length !== 0
              ? `${option.label} | ${count[0].count} Jobs`
              : option.label, // Update label if count is available
        };
      });
      setJobsCount(data.getAllJobs.allJobsCount);
      setOption(updatedOptions);
    }
  }, [data, loading]);

  // Handle change event for the select component
  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedValue(selectedOption);
    if (selectedOption) {
      dispatch(fetchFilteredData(selectedOption.value));
    } else {
      dispatch(fetchFilteredData(null)); // Handle the case where the selection is cleared
    }
  };

  return (
    <>
      {!loading && (
        <Select
          options={option}
          onChange={handleChange}
          value={selectedValue}
          isClearable
          placeholder={`Select a Category | ${jobsCount} Jobs`}
        />
      )}
    </>
  );
};

export default SearchBar;
