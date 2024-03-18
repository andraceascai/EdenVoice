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
  const [sortDateOrder, setSortDateOrder] = useState("MostRecent");

  const handleDateSortChange = (dateOrder: string) => {
    setSortDateOrder(dateOrder);
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
        let sortedIdeasbyDate = response.data;
        if (sortDateOrder === "Oldest") {
          setIdeas(sortedIdeasbyDate);
        } else {
          setIdeas(sortedIdeasbyDate.reverse());
        }
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };
    fetchIdeas();
  }, [sortDateOrder]);
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
            onChange={(e) => handleDateSortChange(e.target.value)}
          >
            <option value="MostRecent">Most Recent</option>
            <option value="Oldest">Oldest</option>
            <option value="MostVotes">Most number of votes</option>
            <option value="LeastVotes">Least number of votes</option>
          </select>
        </div>
        {ideas.map((idea) => (
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
