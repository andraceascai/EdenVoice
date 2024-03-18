interface IdeaProps {
  _id: string;
  content: string;
  votes: number;
  date: string;
  onVote: (id: string) => void;
}

const Idea = ({ _id, content, votes, date, onVote }: IdeaProps) => {
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
        </div>
      </div>
    </>
  );
};

export default Idea;
