import Idea from "../Ideas/Idea";
import NavBar from "../NavBar/NavBar";
import "./ExploreIdeas.css";

const ExploreIdeas = () => {
  return (
    <>
      <NavBar />
      <div className="scroll-bar">
        <p className="ideas-description">
          Ideas Dashboard: Discover and engage with the latest suggestions from
          our team. Vote on the ideas you believe in, and help us identify the
          top initiatives for our company's growth. Every idea counts, and your
          input can make a real difference.
        </p>

        <div className="filter-dropdown">
          <label htmlFor="cars">Sort by: </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="cars"
            id="sort"
          >
            <option value="Oldest">Oldest</option>
            <option value="MostRecent">Most Recent</option>
            <option value="MostVotes">Most number of votes</option>
            <option value="LeastVotes">Least number of votes</option>
          </select>
        </div>
        <Idea />
        <Idea />
        <Idea />
        <Idea />
        <Idea />
      </div>
    </>
  );
};

export default ExploreIdeas;
