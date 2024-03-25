import { useState } from "react";
import "./Comments.css";
import userIcon from "/src/frontendAssets/user-icon.png";
import CommentForm from "./CommentForm";
interface Comments {
  postId: string;
  id: number;
  body: string;
  createdAt: string;
  parentId: number;
  userName: string;
}
interface CommentProps {
  comment: Comments;
  replies: Comments[];
  addComment: (newComment: Comments) => void;
}
const Comment = ({ comment, replies, addComment }: CommentProps) => {
  const [activeComment, setActiveComment] = useState(false);
  const handleCloseForm = () => {
    setActiveComment(false);
  };
  return (
    <>
      <div className="comment">
        <div className="comment-image-container">
          <img src={userIcon} />
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.userName}</div>
            <div className="comment-date">{comment.createdAt}</div>
          </div>
          <div className="comment-text">{comment.body}</div>

          <div className="comment-actions">
            {comment.parentId === 0 && (
              <div
                className="comment-action"
                onClick={() => setActiveComment(!activeComment)}
              >
                Reply
              </div>
            )}
            {activeComment && (
              <CommentForm
                submitLabel="Reply"
                postId={comment.postId}
                addComment={addComment}
                parentId={comment.id}
                closeForm={handleCloseForm}
              />
            )}
          </div>
          {replies.length > 0 && (
            <div className="replies">
              {replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  replies={[]}
                  addComment={addComment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
