import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { GET_ONE_EVENT } from "../utils/queries";
import { UPDATE_EVENT } from "../utils/mutations";
import { Container, Col, Form, Button, Row, Alert } from "react-bootstrap";

const UpdateEvent = () => {
  const [updateEvent] = useMutation(UPDATE_EVENT);
  const { eventId } = useParams();

  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [eventInput, setEventInput] = useState({
    title: "",
    description: "",
    cost: 0,
    location: "",
    date: "",
  });

  const { loading, error, data } = useQuery(GET_ONE_EVENT, {
    variables: { eventId: eventId },
  });

  useEffect(() => {
    if (!loading) {
      setEventInput({
        title: data.event.title,
        description: data.event.description,
        cost: data.event.cost,
        location: data.event.location,
        date: data.event.date,
      });
    }
  }, [loading]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const update = await updateEvent({
        variables: {
          updateEventId: eventId,
          title: eventInput.title,
          description: eventInput.description,
          cost: parseFloat(eventInput.cost),
          location: eventInput.location,
          date: eventInput.date,
        },
      });

      if (!update) {
        setShowAlert(true);
        setAlertStatus("danger");
        throw new Error("Something went wrong!");
      } else {
        setShowAlert(true);
        setAlertStatus("success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showAlert &&
        (alertStatus === "success" ? (
          <Alert variant="success" className="m-0">
            <Alert.Heading className="text-center">
              Your Event has been successfully updated!
            </Alert.Heading>
            <div className="d-flex justify-content-center">
              <Button
                as={Link}
                to={`/eventDetails/${eventId}`}
                variant="outline-success"
              >
                View Your Event
              </Button>
            </div>
          </Alert>
        ) : (
          <Alert variant="danger" className="m-0">
            <Alert.Heading className="text-center">
              Something went wrong with the update!
            </Alert.Heading>
            <div className="d-flex justify-content-center">
              <Button as={Link} to="/myEvents" variant="outline-danger">
                Go back to My Events
              </Button>
            </div>
          </Alert>
        ))}
      <div className="bg-grey p-5">
        <Container>
          <h1>Edit Your Event:</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    name="title"
                    value={eventInput.title}
                    onChange={(e) => {
                      setEventInput({
                        ...eventInput,
                        title: e.target.value,
                      });
                    }}
                    type="text"
                    placeholder={eventInput.title}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    name="description"
                    value={eventInput.description}
                    onChange={(e) =>
                      setEventInput({
                        ...eventInput,
                        description: e.target.value,
                      })
                    }
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Event Description"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cost:</Form.Label>
                  <Form.Control
                    name="cost"
                    value={eventInput.cost}
                    onChange={(e) =>
                      setEventInput({
                        ...eventInput,
                        cost: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="Event Cost"
                    step="0.01"
                    min="0"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Location:</Form.Label>
                  <Form.Control
                    name="location"
                    value={eventInput.location}
                    onChange={(e) =>
                      setEventInput({
                        ...eventInput,
                        location: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Event Location"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control
                    name="date"
                    value={eventInput.date}
                    onChange={(e) =>
                      setEventInput({
                        ...eventInput,
                        date: e.target.value,
                      })
                    }
                    type="datetime-local"
                    placeholder="Event Date"
                    required
                  />
                </Form.Group>
                <Button variant="success" type="submit" size="lg">
                  Edit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default UpdateEvent;
