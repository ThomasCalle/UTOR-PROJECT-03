import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col, Circle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import placeholder from "../assets/placeholder.png";
import { GET_ONE_USER } from "../utils/queries";
import Auth from "../utils/auth";

const MyEvents = () => {
  //getting the loggedin user's ID
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  console.log(userId);

  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { userId: userId },
  });

  if (error) console.log(error.message);
  console.log(data);

  const { user } = data || [];

  if (user) {
    const events = user.events || "No Events";
    console.log(events);

    return (
      <>
        {loading ? (
          <div>
            <h3>still loading</h3>
          </div>
        ) : (
          <Container className="center">
            <div className="mx-auto p-5">
              <h3>Welcome {user.username}!</h3>
              <div>
                <h4 className="mt-5">Here are your Events:</h4>
                <p>To edit or delete events, hover over the image</p>
                {/* rendering user's events */}
                <Container>
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {events.map((event) => (
                      <Col key={event._id}>
                        <Card style={{ width: "18rem" }}>
                          <Card.Img
                            variant="top"
                            src={placeholder}
                            className="p-2"
                          />
                          <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Text>{event.description}</Card.Text>
                            {/* Remember to link proper event details page */}
                            <Button
                              as={Link}
                              to="/eventDetail"
                              variant="primary"
                            >
                              more details
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
              {/* links to create event on click */}
              <Button
                as={Link}
                to="/createEvent"
                variant="primary"
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  position: "fixed",
                  bottom: "100px",
                  right: "100px",
                  width: "50px",
                  height: "50px",
                }}
              >
                <FontAwesomeIcon icon={faPlus} size="2x" />
              </Button>
            </div>
          </Container>
        )}
      </>
    );
  }
};
export default MyEvents;

//edit icon: https://fontawesome.com/icons/pen-to-square?f=classic&s=regular
//trash icon: https://fontawesome.com/icons/trash-can?f=classic&s=solid
//plus icon: https://fontawesome.com/icons/plus?f=classic&s=solid

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
