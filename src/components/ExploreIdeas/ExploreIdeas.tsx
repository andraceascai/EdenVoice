import { useEffect, useState } from "react";
import Idea from "../Ideas/Idea";
import NavBar from "../NavBar/NavBar";
import "./ExploreIdeas.css";
import axios from "axios";

interface Idea {
  _id: string;
  postId: number;
  content: string;
  date: string;
  votes: number;
  whoVoted: string[];
}

const ExploreIdeas = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [displayedIdeas, setDisplayedIdeas] = useState<Idea[]>([]);
  const [sortOrder, setSortOrder] = useState("MostRecent");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (sortCondition: string) => {
    setSortOrder(sortCondition);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleVotes = async (id: string) => {
    try {
      const response = await axios.put(
        `https://test-edenvoice.azurewebsites.net/api/posts/${id}/vote`
      );
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === id ? { ...idea, votes: response.data.votes } : idea
        )
      );
    } catch (error) {
      console.error("Error voting on idea:", error);
    }
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(
          "https://test-edenvoice.azurewebsites.net/api/posts"
        );
        let fetchedIdeas = [...response.data];

        if (sortOrder === "Oldest") {
          fetchedIdeas.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        } else if (sortOrder === "MostRecent") {
          fetchedIdeas.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        } else if (sortOrder === "MostVotes") {
          fetchedIdeas.sort((a, b) => b.votes - a.votes);
        } else if (sortOrder === "LeastVotes") {
          fetchedIdeas.sort((a, b) => a.votes - b.votes);
        }

        const filteredIdeas = fetchedIdeas.filter((idea) =>
          idea.content.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setIdeas(fetchedIdeas);
        setDisplayedIdeas(filteredIdeas);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, [sortOrder, searchTerm]);
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
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="MostRecent">Most Recent</option>
            <option value="Oldest">Oldest</option>
            <option value="MostVotes">Most number of votes</option>
            <option value="LeastVotes">Least number of votes</option>
          </select>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search ideas..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {displayedIdeas.map((idea) => (
          <Idea
            _id={idea._id}
            key={idea._id}
            content={idea.content}
            votes={idea.votes}
            date={idea.date}
            onVote={() => handleVotes(idea._id)}
          />
        ))}
      </div>
    </>
  );
};

export default ExploreIdeas;
