import React from "react";

const Homepage = ({ posts, format_date }) => {
  return (
    <main className="container mt-5">
      <h1 className="mb-4 text-white">Chess Blog Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div className="card mb-3">
              <div className="card-header bg-warning">
                <h2 className="card-title">
                  <a href={`/post/${post.id}`} className="text-dark">
                    {post.title}
                  </a>
                </h2>
              </div>
              <div className="card-body text-dark">
                <p>
                  Created by: {post.user.username} Date:{" "}
                  {format_date(post.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;