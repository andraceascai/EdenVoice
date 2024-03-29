import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import bec from "../../frontendAssets/bec.png";
import "./Post.css";

const Post = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://test-edenvoice.azurewebsites.net/api/posts",
        {
          content: text,
        }
      );
      console.log("Post created:", response.data);
      setText("");
      navigate("/explore");
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
