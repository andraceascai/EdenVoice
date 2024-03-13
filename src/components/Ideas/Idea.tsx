interface IdeaProps {
  content: string;
  votes: number;
  date: string;
}

const Idea = ({ content, votes, date }: IdeaProps) => {
  return (
    <>
      <div className="content">
        <div className="container">
          <button type="button" className="vote">
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
