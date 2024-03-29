import { useEffect, useState } from "react";
import Idea from "../Ideas/Idea";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import "./ExploreIdeas.css";

interface Idea {
  _id: string;
  postId: number;
  content: string;
  date: string;
  votes: number;
  whoVoted: string[];
}

const ExploreIdeas = () => {
  const [displayedIdeas, setDisplayedIdeas] = useState<Idea[]>([]);
  const [sortOrder, setSortOrder] = useState("MostRecent");
  const [searchTerm, setSearchTerm] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSort = (sortCondition: string) => {
    setSortOrder(sortCondition);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://edenvoice.azurewebsites.net/.auth/me"
        );
        const userData = response.data;
        if (userData && userData.length > 0) {
          const userEmail = userData[0].user_id;
          setUserEmail(userEmail);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const handleVotes = async (id: string) => {
    try {
      const response = await axios.put(
        `https://test-edenvoice.azurewebsites.net/api/posts/${id}/vote`,
        {
          userEmail: userEmail,
        }
      );
      setDisplayedIdeas((prevIdeas) =>
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
          fetchedIdeas.sort((a, b) => a.date.localeCompare(b.date));
        } else if (sortOrder === "MostRecent") {
          fetchedIdeas.sort((a, b) => b.date.localeCompare(a.date));
        } else if (sortOrder === "MostVotes") {
          fetchedIdeas.sort((a, b) => b.votes - a.votes);
        } else if (sortOrder === "LeastVotes") {
          fetchedIdeas.sort((a, b) => a.votes - b.votes);
        }

        fetchedIdeas = fetchedIdeas.filter((idea) =>
          idea.content.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setDisplayedIdeas(fetchedIdeas);
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
            whoVoted={idea.whoVoted}
            date={idea.date}
            onVote={() => handleVotes(idea._id)}
          />
        ))}
      </div>
    </>
  );
};

export default ExploreIdeas;
