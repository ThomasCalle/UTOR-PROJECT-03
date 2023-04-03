import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import calendar from "../assets/calendar.jpg";

import { DELETE_EVENT } from "../utils/mutations";
import { GET_ONE_USER } from "../utils/queries";
import Auth from "../utils/auth";

const MyEvents = () => {
  // adding hover feature
  const [hover, setHover] = useState(null);
  const [deleteEvent] = useMutation(DELETE_EVENT);

  //getting the loggedin user's ID
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  console.log(userId);

  const onHover = (eventId) => {
    setHover(eventId);
  };

  const onLeave = () => {
    setHover(null);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent({
        variables: {
          deleteEventId: eventId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  //retrieving logged in users data
  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { userId: userId },
  });

  if (error) console.log(error.message);
  console.log(data);

  const { user } = data || {};

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

  if (!loading) {
    //checks if done loading (loading= false)
    const events = user.events;
    console.log(events);

    return (
      <>
        <Container className="center">
          <div className="mx-auto p-5">
            <h3>Welcome {user.username}!</h3>
            <div>
              {/* conditional rendering if the user has events */}
              {events.length > 0 ? (
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
                            {/* update and delete icon appear on hover */}
                            {parseInt(event.date) > new Date().getTime() ? (
                              <img
                                src={calendar}
                                alt={event.title}
                                className="card-img-top"
                              />
                            ) : (
                              <div style={{ position: "relative" }}>
                                <img
                                  src={calendar}
                                  alt={event.title}
                                  className="card-img-top"
                                  style={{ filter: "brightness(25%)" }}
                                />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1,
                                    color: "white",
                                  }}
                                >
                                  This Event is over
                                </p>
                              </div>
                            )}
                            {hover === event.id && (
                              <div style={eventHoverStyle}>
                                <Button
                                  variant="link"
                                  as={Link}
                                  to={`/updateEvent/${event.id}`}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size="2x"
                                  />
                                </Button>
                                <Button
                                  variant="link"
                                  onClick={() => handleDeleteEvent(event.id)}
                                >
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
                                to={`/eventDetails/${event.id}`}
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
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Create New Event!</Tooltip>
              }
            >
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
              </Button>
            </OverlayTrigger>
          </div>
        </Container>
      </>
    );
  }
};
export default MyEvents;

//edit icon: https://fontawesome.com/icons/pen-to-square?f=classic&s=regular
//trash icon: https://fontawesome.com/icons/trash-can?f=classic&s=solid
//plus icon: https://fontawesome.com/icons/plus?f=classic&s=solid
