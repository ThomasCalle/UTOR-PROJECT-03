import React, { useState } from "react";

const Post = ({ title, author, createdAt, content, loggedIn, comments, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(commentText);
    setCommentText("");
  };

  return (
    <main className="container mt-5">
      <article>
        <h1>{title}</h1>
        <p>
          Created by: {author} | Date: {createdAt}
        </p>
        <p>{content}</p>
      </article>
      {loggedIn && (
        <form onSubmit={handleSubmit} className="new-chess-comment-form mb-3">
          <div className="mb-3">
            <label htmlFor="content-new-chess-comment" className="form-label">
              Add Comment:
            </label>
            <textarea
              className="form-control"
              id="content-new-chess-comment"
              rows="3"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
      <h2>Comment History:</h2>
      {comments.map(({ comment_text, user, createdAt }, index) => (
        <div key={index} className="comment mb-3">
          <p>{comment_text}</p>
          <p>
            By {user.username} on {createdAt}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Post;