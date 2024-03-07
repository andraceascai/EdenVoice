import bec from "../../frontendAssets/bec.png";
import "./Post.css";

const Post = () => {
  return (
    <>
      <div className="post-text">
        <span>
          Tell us what's on your mind
          <img src={bec} id="lightbulb" />
        </span>
      </div>

      <textarea className="form-control" id="form"></textarea>

      <button type="button" className="submit-button">
        Submit
      </button>
    </>
  );
};

export default Post;
