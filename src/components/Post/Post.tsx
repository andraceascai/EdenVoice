import Animation from "../Animation/Animation";
import NavBar from "../NavBar/NavBar";
import bec from "../../assets/bec.png";
import "./Post.css";

const Post = () => {
  return (
    <>
      <NavBar />
      <Animation />
      <div className="post-text">
        <span>
          Tell us what's on your mind
          <img
            src={bec}
            id="lightbulb"
            // style={{
            //   width: "9vw",
            //   height: "auto",
            //   marginInlineStart: 10,
            //   marginBottom: 10,
            // }}
          />
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
