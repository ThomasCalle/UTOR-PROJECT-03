import React, { useState } from "react";

const NewPost = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePost(title, content);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create a Blog Contribution.</h2>
      <form onSubmit={handleSubmit} className="new-chess-post-form">
        <div className="mb-3">
          <label htmlFor="title-new-chess-post" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title-new-chess-post"
            placeholder="Enter a title of your choice"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content-new-chess-post" className="form-label">
            Content:
          </label>
          <textarea
            className="form-control"
            id="content-new-chess-post"
            rows="5"
            placeholder="Enter content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;