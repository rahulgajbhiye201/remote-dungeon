// Components, Types & Helper imports
import SearchBar from "../features/search-bar";
import Jobs from "../features/jobs";

const Home = () => {
  return (
    <div className="flex min-h-screen w-11/12 flex-col gap-4 lg:w-10/12 xl:w-9/12 2xl:w-7/12">
      <div className="flex flex-col gap-4">
        <SearchBar />
      </div>
      <div className="flex flex-col gap-4">
        <Jobs />
      </div>
    </div>
  );
};

export default Home;
