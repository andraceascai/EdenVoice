import { useState } from "react";
import axios from "axios";
import bec from "../../frontendAssets/bec.png";
import "./Post.css";

const Post = () => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/posts", {
        content: text,
      });
      console.log("Post created:", response.data);
      setText("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="post-text">
        <span>
          Tell us what's on your mind
          <img src={bec} id="lightbulb" />
        </span>
      </div>

      <textarea
        className="form-control"
        id="form"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button type="button" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Post;
