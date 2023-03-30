import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ONE_USER } from "../utils/queries";
import Auth from "../utils/auth";

const MyEvents = () => {
  //getting the loggedin user's ID
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  console.log(userId)

  const { loading, data } = useQuery(GET_ONE_USER, {
    variables: { userId: userId },
  });

  const {user} =data || [];
  console.log(user)

  return (
    <>
      {loading ? (
        <div>
          <h3>still loading</h3>
        </div>
      ) : (
        <h3>Welcome {user.username}!</h3>
      )}
    </>
  );
};
export default MyEvents;

// DASHBOARD CHESS BLOG
// DASHBOARD CHESS BLOG
// DASHBOARD CHESS BLOG
// DASHBOARD CHESS BLOG

// import React from "react";

// const Dashboard = ({ posts, format_date }) => {
//   return (
//     <main className="container mt-5">
//       <div className="row">
//         <div className="col-12">
//           <h1 className="mb-4">Dashboard</h1>
//           <a href="/newpost" className="btn btn-primary">
//             Create a New Blog Post
//           </a>
//         </div>
//       </div>
//       <br />
//       <h1 className="mb-4">Chess Blog Contributions:</h1>
//       {posts.map((post) => (
//         <div className="post-container post mb-3" key={post.id}>
//           <h2>
//             <a href={`/post/${post.id}`} className="text-decoration-none text-reset">
//               {post.title}
//             </a>
//           </h2>
//           <p>
//             Created by: {post.user.username} | Date: {format_date(post.createdAt)}
//           </p>
//           <a href={`/editpost/${post.id}`} className="btn btn-warning">
//             Edit Post
//           </a>
//           <button className="btn btn-danger delete-post" data-post-id={post.id}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </main>
//   );
// };

// export default Dashboard;

// DASHBOARD CHESS BLOG
// DASHBOARD CHESS BLOG
// DASHBOARD CHESS BLOG
