import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ONE_USER } from "../utils/queries";

const Profile = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(GET_ONE_USER, {
    variables: { id: userId },
  });

    console.log(data);

  const user = data?.user || {}


  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          This is {user.username}
        </h2>

        {/* <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <ThoughtForm />
          </div>
        )} */}
      </div>
    </div>
  );
};
export default Profile;




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
