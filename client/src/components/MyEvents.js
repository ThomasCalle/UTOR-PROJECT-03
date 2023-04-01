import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col, Circle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import placeholder from "../assets/placeholder.png";
import { GET_ONE_USER } from "../utils/queries";
import Auth from "../utils/auth";

const MyEvents = () => {
  // adding hover feature
  const [hover, setHover] = useState(null);

  const onHover = (eventId) => {
    setHover(eventId);
  };

  const onLeave = () => {
    setHover(null);
  };

  //getting the loggedin user's ID
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  console.log(userId);

  //retrieving logged in users data
  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { userId: userId },
  });

  if (error) console.log(error.message);
  console.log(data);

  const { user } = data || {};

  if (user) {
    const events = user.events;
    console.log(events);

    const eventHoverStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: "40%",
      zIndex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <>
        {loading ? (
          // if GET_ONE_USER is loading send this:
          <div>
            <h3>still loading</h3>
          </div>
        ) : (
          // once GET_ONE_USER data is loaded, send this:
          <Container className="center">
            <div className="mx-auto p-5">
              <h3>Welcome {user.username}!</h3>
              <div>
                {/* conditional rendering if the user has events */}
                {events ? (
                  <>
                    <h4 className="mt-5">Here are your Events:</h4>
                    <p>To edit or delete events, hover over the image</p>
                    {/* rendering user's events with map method*/}
                    <Container>
                      <Row xs={1} md={2} lg={3} className="g-4">
                        {events.map((event) => (
                          <Col key={event.id}>
                            <Card
                              onMouseEnter={() => onHover(event.id)}
                              onMouseLeave={() => onLeave(null)}
                              style={{ width: "18rem" }}
                            >
                              <Card.Img
                                variant="top"
                                src={placeholder}
                                className="p-2"
                              />
                              {/* update and delete icon appear on hover */}
                              {hover === event.id && (
                                <div style={eventHoverStyle}>
                                  <Button variant="link" as={Link} to={`/updateEvent/${event.id}`}>
                                    <FontAwesomeIcon
                                      icon={faPenToSquare}
                                      size="2x"
                                    />
                                  </Button>
                                  <Button variant="link" as={Link} to="/delete">
                                    <FontAwesomeIcon
                                      icon={faTrashCan}
                                      size="2x"
                                    />
                                  </Button>
                                </div>
                              )}
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
                  </>
                ) : (
                  // if the user has no events:
                  <>
                    <h4 className="mt-5">You haven't made any events yet!</h4>
                    <p>
                      To create an event, click the + icon on the bottom right
                    </p>
                  </>
                )}
              </div>
              {/* link to create event on click */}
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
                key="addEventBtn"
                onMouseEnter={() => onHover("addEventBtn")}
                onMouseLeave={() => onLeave(null)}
              >
                <FontAwesomeIcon icon={faPlus} size="2x" />
                {/* hover not working yet but it's not a main functionality */}
                {hover === "#addEventBtn" && (
                  <h2
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: "40%",
                      zIndex: "2",
                    }}
                  >
                    {console.log("here")}
                    hello
                  </h2>
                )}
              </Button>
            </div>
          </Container>
        )}
      </>
    );
  } else {
    return (
      <div>
        <h3>Sorry, your events could not be found! </h3>
      </div>
    );
  }
};
export default MyEvents;

//edit icon: https://fontawesome.com/icons/pen-to-square?f=classic&s=regular
//trash icon: https://fontawesome.com/icons/trash-can?f=classic&s=solid
//plus icon: https://fontawesome.com/icons/plus?f=classic&s=solid
