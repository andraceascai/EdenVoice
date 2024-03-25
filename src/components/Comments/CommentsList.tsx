import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.css";

interface Comments {
  postId: string;
  id: number;
  body: string;
  createdAt: string;
  parentId: number;
  userName: string;
}

interface CommentsListProps {
  comments: Comments[];
  _id: string;
  addComment: (newComment: Comments) => void;
}

const CommentsList = ({ comments, _id, addComment }: CommentsListProps) => {
  const rootComments = comments.filter((c) => c.parentId === 0);
  const getReplies = (commentId: number) => {
    return comments
      .filter((c) => c.parentId === commentId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  };
  const handleCloseForm = () => {
    console.log("");
  };
  return (
    <>
      <div className="comments">
        <h5 className="comments-title">Comments</h5>
        <div className="comment-form-title">Leave a comment</div>
        <CommentForm
          submitLabel="Comment"
          postId={_id}
          parentId={0}
          addComment={addComment}
          closeForm={handleCloseForm}
        />
        <div className="comments-container">
          {rootComments.map((rc) => (
            <Comment
              key={rc.id}
              comment={rc}
              replies={getReplies(rc.id)}
              addComment={addComment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentsList;
