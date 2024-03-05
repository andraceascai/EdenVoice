const Idea = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <button type="button" className="vote">
            Vote
          </button>
          <div className="post">
            <p>My best idea</p>
          </div>
          <div className="votes">
            <p>
              Votes: 69
              <br />
              Date: 04.03.2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Idea;
