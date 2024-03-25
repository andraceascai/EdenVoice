import { useEffect, useState } from "react";
import CommentsList from "../Comments/CommentsList";
import axios from "axios";
import "./Idea.css";

interface IdeaProps {
  _id: string;
  content: string;
  votes: number;
  date: string;
  onVote: (id: string) => void;
}

interface Comments {
  postId: string;
  id: number;
  body: string;
  createdAt: string;
  parentId: number;
  userName: string;
}

const Idea = ({ _id, content, votes, date, onVote }: IdeaProps) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchComments = async (id: string) => {
      try {
        const response = await axios.get(
          `https://test-edenvoice.azurewebsites.net/api/posts/${id}/comments`
        );
        setComments(response.data.reverse());
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments(_id);
  }, []);

  const handleAddComment = (newComment: Comments) => {
    setComments([newComment, ...comments]);
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <button type="button" className="vote" onClick={() => onVote(_id)}>
            Vote
          </button>
          <div className="post">
            <p>{content}</p>
          </div>
          <div className="votes">
            <p>
              Votes: {votes}
              <br />
              Date: {date}
            </p>
          </div>

          <button
            type="button"
            className="comment-button"
            onClick={() => setShowComments(!showComments)}
          >
            Comment
          </button>

          {showComments && (
            <CommentsList
              key={_id}
              comments={comments}
              _id={_id}
              addComment={handleAddComment}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Idea;
