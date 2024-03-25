import { useState } from "react";
import "./Comments.css";
import axios from "axios";

interface Comments {
  postId: string;
  id: number;
  body: string;
  createdAt: string;
  parentId: number;
  userName: string;
}

interface CommentFormProps {
  submitLabel: string;
  postId: string;
  parentId: number;
  addComment: (newComment: Comments) => void;
  closeForm: () => void;
}

const CommentForm = ({
  submitLabel,
  postId,
  addComment,
  parentId,
  closeForm,
}: CommentFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = async (postId: string, text: string) => {
    try {
      const response = await axios.post(
        `https://test-edenvoice.azurewebsites.net/api/posts/${postId}/comments`,
        {
          body: text,
          parentId: parentId,
        }
      );
      setText("");
      addComment(response.data);
      closeForm();
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };
  return (
    <>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <button
        type="submit"
        className="comment-form-button"
        onClick={() => handleSubmit(postId, text)}
      >
        {submitLabel}
      </button>
    </>
  );
};

export default CommentForm;
