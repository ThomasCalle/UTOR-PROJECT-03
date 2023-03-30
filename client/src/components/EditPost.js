import React, { useState } from "react";

const EditPost = ({ title, content, onUpdatePost, onDeletePost }) => {
  const [postTitle, setPostTitle] = useState(title);
  const [postContent, setPostContent] = useState(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePost(postTitle, postContent);
  };

  return (
    <main className="container mt-5">
      <h1 className="mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="title-update-chess-post" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title-update-chess-post"
            placeholder="Enter post title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content-update-chess-post" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content-update-chess-post"
            rows="3"
            placeholder="Enter post content"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" id="update-chess-post" className="btn btn-primary">
          Update Post
        </button>
        <button
          type="button"
          id="delete-chess-post"
          className="btn btn-danger"
          onClick={onDeletePost}
        >
          Delete Post
        </button>
      </form>
    </main>
  );
};

export default EditPost;