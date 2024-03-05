import Idea from "../Ideas/Idea";
import NavBar from "../NavBar/NavBar";
import "./ExploreIdeas.css";

const ExploreIdeas = () => {
  return (
    <>
      <NavBar />
      <div className="scroll-bar">
        <p className="ideas-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam
          perspiciatis vero mollitia est, laboriosam, hic ex expedita
          repudiandae culpa quibusdam rerum tenetur ipsa reiciendis ut veritatis
          exercitationem? Aperiam, quod.
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
            <option value="Votes">Number of votes</option>
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
